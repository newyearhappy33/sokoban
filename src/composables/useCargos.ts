import { useMapStore } from "../store/map";
import { useMoveCargosID, useNewPosition } from "./usePosition";
import type { Cargo, Position } from "./usePosition";

export function useCargosPosition(
  pos: Position,
  cargos: Cargo,
  direction: string
): boolean {
  const { isWall, isCargos, cargoIntoWall } = useMapStore();

  const id = useMoveCargosID(pos, cargos); // 获取到要推动箱子的ID

  let res = true;

  cargos.find((item) => {
    // 判断是否有箱子
    if (item.id === id) {
      // 获取箱子新的位置
      const newPos = useNewPosition([item], direction);
      // 判断箱子新的位置是否有墙或者其他箱子
      if (cargoIntoWall(newPos) && isCargos(newPos, cargos)) {
        return (res = false);
      }
      // 更新箱子的位置
      item.x = newPos[0].x;
      item.y = newPos[0].y;
    }
  });

  return res;
}
