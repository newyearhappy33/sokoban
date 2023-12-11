import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position, useCargoPlayer } from "../composables/usePosition";
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
  const player = reactive<Position>([
    {
      id: 0,
      x: 1,
      y: 1,
    },
  ]);

  function movePlayerToLeft() {
    if (isWall(player, "left")) return;

    if (useCargoPlayer(player, getCargoPosition())) {
      if (!moveCargoToLeft(player)) return;
      if (player.length > 1) {
        player.forEach((item) => {
          item.x -= 1;
        });
      } else {
        player[0].x -= 1;
      }
      return;
    }
    if (player.length > 1) {
      player.forEach((item) => {
        item.x -= 1;
      });
    } else {
      player[0].x -= 1;
    }
  }

  function movePlayerToRight() {
    if (isWall(player, "right")) return;

    if (useCargoPlayer(player, getCargoPosition())) {
      if (!moveCargoToRight(player)) return;
      if (player.length > 1) {
        player.forEach((item) => {
          item.x += 1;
        });
      } else {
        player[0].x += 1;
      }
      return;
    }
    if (player.length > 1) {
      player.forEach((item) => {
        item.x += 1;
      });
    } else {
      player[0].x += 1;
    }
  }

  function movePlayerToDown() {
    if (isWall(player, "down")) return;

    if (useCargoPlayer(player, getCargoPosition())) {
      if (!moveCargoToDown(player)) return;
      if (player.length > 1) {
        player.forEach((item) => {
          item.y += 1;
        });
      } else {
        player[0].y += 1;
      }
      return;
    }
    if (player.length > 1) {
      player.forEach((item) => {
        item.y += 1;
      });
    } else {
      player[0].y += 1;
    }
  }

  function movePlayerToUp() {
    if (isWall(player, "up")) return;

    if (useCargoPlayer(player, getCargoPosition())) {
      if (!moveCargoToTop(player)) return;
      if (player.length > 1) {
        player.forEach((item) => {
          item.y -= 1;
        });
      } else {
        player[0].y -= 1;
      }
      return;
    }
    if (player.length > 1) {
      player.forEach((item) => {
        item.y -= 1;
      });
    } else {
      player[0].y -= 1;
    }
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
