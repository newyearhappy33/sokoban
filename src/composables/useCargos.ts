import { useMapStore } from "../store/map";
import { useMoveCargosID, useNewPosition } from "./usePosition";
import type { Cargo, Position } from "./usePosition";
import { gameObserver } from "../composables/gameOver";
/**
 *
 * @param pos 坐标位置
 * @param cargos 箱体坐标位置
 * @param direction 键盘按键
 * @returns boolean 是否推动成功
 * @description 箱体移动事件
 */
function useCargosPosition(
  pos: Position,
  cargos: Cargo,
  direction: string,
  playID: number
): boolean {
  const { isCargos, cargoIntoWall } = useMapStore();
  const id = useMoveCargosID(pos, cargos, playID); // 获取到要推动箱子的ID

  let res = true;

  cargos.find((item) => {
    // 判断是否有箱子
    if (item.id === id) {
      const newPos = useNewPosition([item], direction, playID); // 获取箱子新的位置
      if (cargoIntoWall(newPos!) || isCargos(newPos!, cargos)) {
        return (res = false);
      } else {
        // 更新箱子的位置
        item.x = newPos[0].x;
        item.y = newPos[0].y;

        gameObserver.notify(); // 通知游戏结束
      }
    }
  });

  return res;
}

export default useCargosPosition;
