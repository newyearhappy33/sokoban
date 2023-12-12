import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position, useHaveCargo } from "../composables/usePosition";
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

    // BUG: 移动人物检测箱子时，坐标位置应该人物的方向坐标 + 1
    //      这里没有进行数据处理，导致人物移动时，箱子也会移动

    const newPlayer = player.map((item) => {
      return {
        id: item.id,
        x: item.x - 1,
        y: item.y,
      };
    });

    if (useHaveCargo(newPlayer, getCargoPosition())) {
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

    if (useHaveCargo(player, getCargoPosition())) {
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
    if (isWall(player, "down")) return; // 人物撞墙检测

    //  判断移动方向是否有箱体
    if (useHaveCargo(player, getCargoPosition())) {
      if (!moveCargoToDown(player)) return; // 箱体移动成功检测
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
    if (isWall(player, "top")) return;

    if (useHaveCargo(player, getCargoPosition())) {
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

  // function setupPlayer(newPlayer: { x: number; y: number }) {
  //   player.x = newPlayer.x;
  //   player.y = newPlayer.y;
  // }

  return {
    player,
    movePlayerToLeft,
    movePlayerToRight,
    movePlayerToDown,
    movePlayerToUp,
    getPlayerPosition,
  };
});
