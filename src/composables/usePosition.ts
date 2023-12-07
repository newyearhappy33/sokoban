import { computed } from "vue";
export interface Position {
  x: number;
  y: number;
}
interface Cargos {
  id: number;
  x: number;
  y: number;
}
export type Cargo = Cargos[];

// Cargo 和 Wall 计算属性
const STEP = 32;
export function usePosition(pos: Position) {
  const position = computed(() => {
    return {
      left: pos.x * STEP + "px",
      top: pos.y * STEP + "px",
    };
  });
  return { position };
}

export function useCargoPlayer(player: Position, cargo: any) {
  // const x = player.x;
  // const y = player.y;

  return cargo.some((item: any) => {
    return (
      item.x * STEP === player.x * STEP && item.y * STEP === player.y * STEP
    );
  });
}

export function useMoveCargos(pos: Position, cargos: Cargo) {
  for (const data of cargos) {
    if (data.x === pos.x && data.y === pos.y) {
      return data.id;
    }
  }
  return null;
}
