import { useCargoStore } from "../store/cargo";
import { useMapStore } from "../store/map";
import { Position, useHaveCargo } from "./usePosition";

/**
 *
 * @param direction 按键方向
 * @param player 坐标位置
 * @param playID 玩家ID
 * @returns void
 * @description 玩家移动事件
 */
export function movePlayer(
  direction: string,
  player: Position,
  playID: number
) {
  const { isWall } = useMapStore();
  const {
    getCargoPosition,
    moveCargoToLeft,
    moveCargoToRight,
    moveCargoToDown,
    moveCargoToTop,
  } = useCargoStore();
  if (isWall(player, playID, direction)) return;

  const newPlayer = player.map((item) => {
    return {
      id: item.id,
      x:
        direction === "left"
          ? item.x - 1
          : direction === "right"
          ? item.x + 1
          : item.x,
      y:
        direction === "up"
          ? item.y - 1
          : direction === "down"
          ? item.y + 1
          : item.y,
    };
  });

  // 判断箱体是否存在
  if (useHaveCargo(newPlayer, getCargoPosition(), playID)) {
    const moveCargoFunc = {
      left: moveCargoToLeft,
      right: moveCargoToRight,
      up: moveCargoToTop,
      down: moveCargoToDown,
    }[direction];

    // moveCargoFunc有效并且箱体移动成功时，修改人物坐标
    if (moveCargoFunc && moveCargoFunc(newPlayer, playID)) {
      player.forEach((item) => {
        item.x += direction === "left" ? -1 : direction === "right" ? 1 : 0;
        item.y += direction === "up" ? -1 : direction === "down" ? 1 : 0;
      });
    }
    return;
  }

  player.forEach((item) => {
    item.x += direction === "left" ? -1 : direction === "right" ? 1 : 0;
    item.y += direction === "up" ? -1 : direction === "down" ? 1 : 0;
  });
}
