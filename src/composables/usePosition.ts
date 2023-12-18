import { computed } from "vue";
interface playerPosition {
  id: number;
  x: number;
  y: number;
}
export type Position = playerPosition[];

interface Cargos {
  id: number;
  x: number;
  y: number;
}
export type Cargo = Cargos[];

const STEP = 64;
// 获取到玩家的位置
export function usePosition(pos: Position) {
  const position = computed(() => {
    return {
      left: pos[0].x * STEP + "px",
      top: pos[0].y * STEP + "px",
    };
  });
  return { position };
}

/**
 *
 * @param player 坐标位置
 * @param cargo  箱体
 * @returns Boolean
 * @description 判断玩家移动的方向是否有箱子
 */
export function useHaveCargo(
  player: Position,
  cargo: any,
  playID: number
): boolean {
  if (playID === 0) {
    return cargo.some((item: any) => {
      return (
        item.x * STEP === player[0].x * STEP &&
        item.y * STEP === player[0].y * STEP
      );
    });
  }
  return false;
}

/**
 * @description 获取到要推动箱子的ID
 */
export function useMoveCargosID(pos: Position, cargos: Cargo) {
  for (const data of cargos) {
    if (data.x === pos[0].x && data.y === pos[0].y) {
      return data.id;
    }
  }
  return null;
}

export enum Direction {
  LEFT = "left",
  RIGHT = "right",
  TOP = "up",
  DOWN = "down",
}

/**
 *
 * @param pos 坐标位置
 * @param direction 键盘按键
 * @param playID  玩家ID
 * @returns
 */
export function useNewPosition(
  pos: Position,
  direction: string,
  playID: number
) {
  if (playID === 0) {
    switch (direction) {
      case Direction.LEFT:
        return [{ ...pos[0], x: pos[0].x - 1, y: pos[0].y }];
      case Direction.RIGHT:
        return [{ ...pos[0], x: pos[0].x + 1, y: pos[0].y }];
      case Direction.TOP:
        return [{ ...pos[0], x: pos[0].x, y: pos[0].y - 1 }];
      case Direction.DOWN:
        return [{ ...pos[0], x: pos[0].x, y: pos[0].y + 1 }];
      default:
        return pos;
    }
  }
}
