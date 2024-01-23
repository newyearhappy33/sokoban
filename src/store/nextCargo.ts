import { reactive } from "vue";
import { defineStore } from "pinia";
import { useCargoStore } from "./cargo";

export const useNextCargo = defineStore("nextCargo", () => {
  const { cargos } = useCargoStore();
  const nextCargoMap = reactive([
    [
      { id: 1, x: 2, y: 7 },
      { id: 2, x: 3, y: 3 },
    ],
    [
      { id: 1, x: 7, y: 5 },
      { id: 2, x: 4, y: 8 },
    ],
    [
      { id: 1, x: 5, y: 3 },
      { id: 2, x: 6, y: 3 },
    ],
  ]);

  function nextCargo(index: number) {
    if (index >= 0 && index < nextCargoMap.length) {
      if (Array.isArray(nextCargoMap[index])) {
        cargos.splice(0, cargos.length);
        cargos.push(...nextCargoMap[index]);
      } else {
        console.error("newMap[index] is not Array");
      }
    } else {
      console.error("Index out of bounds");
    }
  }

  return { nextCargo };
});
