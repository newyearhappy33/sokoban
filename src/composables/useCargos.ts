import { useMapStore } from "../store/map";
import { useMoveCargos } from "./usePosition";
import type { Cargo, Position } from "./usePosition";

export function useCargosPosition(pos: Position, cargos: Cargo): boolean {
  const { isWall, isCargos } = useMapStore();
  const id = useMoveCargos(pos, cargos);
  let res = true;
  cargos.find((item) => {
    if (item.id === id) {
      if (isWall({ x: item.x - 1, y: item.y })) {
        return (res = false);
      }
      if (isCargos({ x: item.x - 1, y: item.y }, cargos)) {
        return (res = false);
      }
      item.x -= 1;
    }
  });
  return res;
}
