import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position } from "../composables/usePosition";
import { movePlayer } from "../composables/usePlayer";

export const usePlayerStore = defineStore("player", () => {
  const player = reactive<Position>([
    {
      id: 0,
      x: 1,
      y: 1,
    },
  ]);

  // 初始化玩家位置
  function initPlayer() {
    player.map((item) => {
      item.x = 1;
      item.y = 1;
    });
  }

  /**
   *  @description 玩家移动事件
   */
  function movePlayerTo(key: string, id: number) {
    movePlayer(key, [player[id]], id);
  }

  function getPlayerPosition() {
    return player;
  }

  return {
    player,
    movePlayerTo,
    getPlayerPosition,
    initPlayer,
  };
});
