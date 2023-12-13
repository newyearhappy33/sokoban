import { useCargoStore } from "../store/cargo";
import { useMapStore } from "../store/map";
import { Position, useHaveCargo } from "./usePosition";

const { isWall } = useMapStore();
const {
  getCargoPosition,
  moveCargoToLeft,
  moveCargoToRight,
  moveCargoToDown,
  moveCargoToTop,
} = useCargoStore();

/**
 *
 * @param direction 按键方向
 * @param player 坐标位置
 * @returns void
 * @description 玩家移动事件
 */
function movePlayer(direction: string, player: Position) {
  if (isWall(player, direction)) return;

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

  if (useHaveCargo(newPlayer, getCargoPosition())) {
    const moveCargoFunc = {
      left: moveCargoToLeft,
      right: moveCargoToRight,
      up: moveCargoToTop,
      down: moveCargoToDown,
    }[direction];

    if (moveCargoFunc && moveCargoFunc(newPlayer)) {
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
export default movePlayer;
