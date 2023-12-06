import { defineStore } from "pinia";
import { useMapStore } from "./map";
import { Cargo, Position, useMoveCargos } from "../composables/usePosition";
import { reactive } from "vue";
export const useCargoStore = defineStore("cargo", () => {
  const { isWall } = useMapStore();

  const cargos: Cargo = reactive([
    { id: 1, x: 2, y: 2 },
    { id: 2, x: 3, y: 3 },
  ]);

  function setupCargos(newCargos: Cargo[]) {
    cargos.splice(0, cargos.length, ...newCargos);
  }

  function getCargoPosition() {
    return cargos;
  }

  function moveCargoToLeft(pos: Position) {
    if (isWall(pos)) return;
    const id = useMoveCargos(pos, cargos);
    cargos.find((item) => {
      if (item.id === id) {
        item.x -= 1;
      }
    });
  }
  function moveCargoToRight() {}
  function moveCargoToTop() {}
  function moveCargoToDown() {}

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
