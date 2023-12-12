import { defineStore } from "pinia";
import { Cargo, Position } from "../composables/usePosition";
import { reactive } from "vue";
import { useCargosPosition } from "../composables/useCargos";
export const useCargoStore = defineStore("cargo", () => {
  const cargos: Cargo = reactive([
    { id: 1, x: 2, y: 2 },
    { id: 2, x: 3, y: 3 },
  ]);

  function setupCargos(newCargos: Cargo) {
    cargos.splice(0, cargos.length, ...newCargos);
  }

  function getCargoPosition() {
    return cargos;
  }

  // TODO:bug在这里，传递pos时，需要进行数据处理
  function moveCargoToLeft(pos: Position) {
    const newPos = pos.map((item) => {
      return {
        id: item.id,
        x: item.x - 1,
        y: item.y,
      };
    });

    return useCargosPosition(newPos, cargos, "left");
  }

  function moveCargoToRight(pos: Position) {
    const newPos = pos.map((item) => {
      return {
        id: item.id,
        x: item.x + 1,
        y: item.y,
      };
    });

    return useCargosPosition(newPos, cargos, "right");
  }
  function moveCargoToTop(pos: Position) {
    const newPos = pos.map((item) => {
      return {
        id: item.id,
        x: item.x,
        y: item.y - 1,
      };
    });
    return useCargosPosition(newPos, cargos, "top");
  }
  function moveCargoToDown(pos: Position) {
    const newPos = pos.map((item) => {
      return {
        id: item.id,
        x: item.x,
        y: item.y + 1,
      };
    });
    return useCargosPosition(newPos, cargos, "down");
  }

  return {
    cargos,
    setupCargos,
    getCargoPosition,
    moveCargoToLeft,
    moveCargoToRight,
    moveCargoToTop,
    moveCargoToDown,
  };
});
