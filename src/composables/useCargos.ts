import { useMapStore } from "../store/map";
import { useMoveCargos, useNewPosition } from "./usePosition";
import type { Cargo, Position } from "./usePosition";

export function useCargosPosition(
  pos: Position,
  cargos: Cargo,
  direction: string
): boolean {
  const { isWall, isCargos } = useMapStore();
  const id = useMoveCargos(pos, cargos);
  let res = true;
  cargos.find((item) => {
    if (item.id === id) {
      const newPos = useNewPosition(item, direction);
      if (isWall(newPos)) {
        return (res = false);
      }
      if (isCargos(newPos, cargos)) {
        return (res = false);
      }
      item.x = newPos.x;
      item.y = newPos.y;
    }
  });
  return res;
}
