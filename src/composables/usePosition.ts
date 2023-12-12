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

const STEP = 32;
// 获取到玩家的位置
export function usePosition(pos: Position) {
  const position = computed(() => {
    if (pos.length > 1) {
      return pos.map((item) => {
        return {
          left: item.x * STEP + "px",
          top: item.y * STEP + "px",
        };
      });
    } else {
      return {
        left: pos[0].x * STEP + "px",
        top: pos[0].y * STEP + "px",
      };
    }
  });
  return { position };
}

// 判断是否有箱子
export function useHaveCargo(player: Position, cargo: any) {
  // if (player.length > 1) {
  //   for (const data of player) {
  //     if (data.x === cargo.x && data.y === cargo.y) {
  //       return data.id;
  //     }
  //   }
  //   return null;
  // } else {
  return cargo.some((item: any) => {
    return (
      item.x * STEP === player[0].x * STEP &&
      item.y * STEP === player[0].y * STEP
    );
  });
  // }
}

// 获取到要推动箱子的ID
export function useMoveCargosID(pos: Position, cargos: Cargo) {
  for (const data of cargos) {
    if (pos.length > 1) {
      for (const item of pos) {
        if (data.x === item.x && data.y === item.y) {
          return data.id;
        }
      }
    } else if (data.x === pos[0].x && data.y === pos[0].y) {
      return data.id;
    }
  }
  return null;
}

export enum Direction {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  DOWN = "down",
}

// 更新位置
export function useNewPosition(pos: Position, direction: string) {
  if (pos.length > 1) {
    switch (direction) {
      case Direction.LEFT:
        return pos.map((item) => {
          return { ...item, x: item.x - 1 };
        });
      case Direction.RIGHT:
        return pos.map((item) => {
          return { ...item, x: item.x + 1 };
        });
      case Direction.TOP:
        return pos.map((item) => {
          return { ...item, y: item.y - 1 };
        });
      case Direction.DOWN:
        return pos.map((item) => {
          return { ...item, y: item.y + 1 };
        });
      default:
        return pos;
    }
  } else {
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
