import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position } from "../composables/usePosition";
import movePlayer from "../composables/usePlayer";

export const usePlayerStore = defineStore("player", () => {
  const player = reactive<Position>([
    {
      id: 0,
      x: 1,
      y: 1,
    },
  ]);

  /**
   *  @description 玩家移动事件
   */
  function movePlayerToLeft() {
    movePlayer("left", player);
  }

  function movePlayerToRight() {
    movePlayer("right", player);
  }

  function movePlayerToDown() {
    movePlayer("down", player);
  }

  function movePlayerToUp() {
    movePlayer("up", player);
  }

  function getPlayerPosition() {
    return player;
  }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
    getPlayerPosition,
  };
});
