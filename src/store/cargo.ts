import { defineStore } from "pinia";
import { Cargo, Position } from "../composables/usePosition";
import { reactive } from "vue";
import useCargosPosition from "../composables/useCargos";
export const useCargoStore = defineStore("cargo", () => {
  const cargos: Cargo = reactive([
    { id: 1, x: 2, y: 2 },
    { id: 2, x: 3, y: 3 },
  ]);

  function initCargo() {
    cargos.splice(0, cargos.length);
    cargos.push({ id: 1, x: 2, y: 2 }, { id: 2, x: 3, y: 3 });
  }

  function getCargoPosition() {
    return cargos;
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
    initCargo,
    getCargoPosition,
    moveCargoToLeft,
    moveCargoToRight,
    moveCargoToTop,
    moveCargoToDown,
  };
});
