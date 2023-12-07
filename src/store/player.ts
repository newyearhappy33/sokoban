import { defineStore } from "pinia";
import { reactive } from "vue";
import { useCargoPlayer } from "../composables/usePosition";
import { useCargoStore } from "./cargo";
import { useMapStore } from "./map";

export const usePlayerStore = defineStore("player", () => {
  const { isWall } = useMapStore();
  const {
    getCargoPosition,
    moveCargoToLeft,
    moveCargoToRight,
    moveCargoToDown,
    moveCargoToTop,
  } = useCargoStore();
  const player = reactive({
    x: 1,
    y: 1,
  });

  function movePlayerToLeft() {
    if (isWall({ x: player.x - 1, y: player.y })) return;

    if (useCargoPlayer({ x: player.x - 1, y: player.y }, getCargoPosition())) {
      if (!moveCargoToLeft({ x: player.x - 1, y: player.y })) return;
      player.x -= 1;
      return;
    }
    player.x -= 1;
  }

  function movePlayerToRight() {
    if (isWall({ x: player.x + 1, y: player.y })) return;

    if (useCargoPlayer({ x: player.x + 1, y: player.y }, getCargoPosition())) {
      if (!moveCargoToRight({ x: player.x + 1, y: player.y })) return;
      player.x += 1;
      return;
    }

    player.x += 1;
  }

  function movePlayerToDown() {
    if (isWall({ x: player.x, y: player.y + 1 })) return;

    if (useCargoPlayer({ x: player.x, y: player.y + 1 }, getCargoPosition())) {
      if (!moveCargoToDown({ x: player.x, y: player.y + 1 })) return;
      player.y += 1;
      return;
    }
    player.y += 1;
  }

  function movePlayerToUp() {
    if (isWall({ x: player.x, y: player.y - 1 })) return;

    if (useCargoPlayer({ x: player.x, y: player.y - 1 }, getCargoPosition())) {
      if (!moveCargoToTop({ x: player.x, y: player.y - 1 })) return;
      player.y -= 1;
      return;
    }
    player.y -= 1;
  }

  function getPlayerPosition() {
    return player;
  }

  function setupPlayer(newPlayer: { x: number; y: number }) {
    player.x = newPlayer.x;
    player.y = newPlayer.y;
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
    getPlayerPosition,
    setupPlayer,
  };
});
