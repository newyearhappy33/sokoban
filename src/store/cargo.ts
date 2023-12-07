import { defineStore } from "pinia";
import { useMapStore } from "./map";
import { Cargo, Position, useMoveCargos } from "../composables/usePosition";
import { reactive } from "vue";
export const useCargoStore = defineStore("cargo", () => {
  const { isWall, isCargos } = useMapStore();

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

  function moveCargoToLeft(pos: Position) {
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
