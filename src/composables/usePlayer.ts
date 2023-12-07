import {
  Position,
  useCargoPlayer,
  useNewPosition,
  Direction,
} from "./usePosition";
import { useMapStore } from "../store/map";
import { useCargoStore } from "../store/cargo";

export function usePlayer(player: Position, direction: string) {
  const { isWall } = useMapStore();
  const { getCargoPosition } = useCargoStore();
  const newPlayer = useNewPosition(player, direction);
  const isCargo = useMoveCargos(direction);
  if (isWall({ x: newPlayer.x - 1, y: newPlayer.y })) return;

  if (
    useCargoPlayer({ x: newPlayer.x - 1, y: newPlayer.y }, getCargoPosition())
  ) {
    if (!isCargo({ x: newPlayer.x - 1, y: newPlayer.y })) return;
    player.x = newPlayer.x;
    player.y = newPlayer.y;
    return;
  }
  player.x = newPlayer.x;
  player.y = newPlayer.y;
}

function useMoveCargos(direction: string): (pos: Position) => boolean {
  const { moveCargoToLeft, moveCargoToRight, moveCargoToTop, moveCargoToDown } =
    useCargoStore();
  switch (direction) {
    case Direction.LEFT:
      return moveCargoToLeft;
    case Direction.RIGHT:
      return moveCargoToRight;
    case Direction.TOP:
      return moveCargoToTop;
    case Direction.DOWN:
      return moveCargoToDown;
    default:
      return () => true;
  }
}
