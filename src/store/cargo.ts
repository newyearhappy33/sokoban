import { defineStore } from "pinia";
import { useMapStore } from "./map";
interface Cargo {
  id: number;
  x: number;
  y: number;
}
export const useCargoStore = defineStore("cargo", () => {
  const { isWall } = useMapStore();
  const cargos: Cargo[] = [
    { id: 1, x: 2, y: 2 },
    { id: 2, x: 3, y: 3 },
  ];

  function setupCargos(newCargos: Cargo[]) {
    cargos.splice(0, cargos.length, ...newCargos);
  }

  function getCargoPosition() {
    return cargos;
  }

  function moveCargoToLeft(cargo: Cargo) {
    if (isWall(cargo)) return;
    console.log(cargo);
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
