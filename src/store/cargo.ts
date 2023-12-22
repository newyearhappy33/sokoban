import { defineStore } from "pinia";
import { Cargo, Position } from "../composables/usePosition";
import { reactive } from "vue";
import useCargosPosition from "../composables/useCargos";
export const useCargoStore = defineStore("cargo", () => {
  const cargos: Cargo = reactive([
    { id: 1, x: 2, y: 2 },
    { id: 2, x: 3, y: 3 },
  ]);

  const nextCargos = {
    level2: [
      { id: 1, x: 4, y: 3 },
      { id: 2, x: 3, y: 4 },
    ],
    level3: [
      { id: 1, x: 3, y: 7 },
      { id: 2, x: 7, y: 6 },
    ],
    level4: [
      { id: 1, x: 6, y: 4 },
      { id: 2, x: 4, y: 6 },
    ],
  };

  function setupCargos(newCargos: Cargo) {
    cargos.splice(0, cargos.length, ...newCargos);
  }

  function getCargoPosition() {
    return cargos;
  }

  function updateCargoLevel() {
    cargos.splice(0, cargos.length, ...nextCargos.level2);
  }

  /**
   * @description 箱体移动事件
   */
  function moveCargoToLeft(pos: Position, playID: number) {
    return useCargosPosition(pos, cargos, "left", playID);
  }

  function moveCargoToRight(pos: Position, playID: number) {
    return useCargosPosition(pos, cargos, "right", playID);
  }
  function moveCargoToTop(pos: Position, playID: number) {
    return useCargosPosition(pos, cargos, "up", playID);
  }
  function moveCargoToDown(pos: Position, playID: number) {
    return useCargosPosition(pos, cargos, "down", playID);
  }

  return {
    cargos,
    setupCargos,
    getCargoPosition,
    moveCargoToLeft,
    moveCargoToRight,
    moveCargoToTop,
    moveCargoToDown,
    updateCargoLevel,
  };
});
