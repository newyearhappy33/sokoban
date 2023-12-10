import { defineStore } from "pinia";
import { reactive } from "vue";

type MapConfig = number[][];

enum MapClass {
  WALL = "wall",
  FLOOR = "floor",
  CARGO = "cargo",
  END = "end",
}
enum MapID {
  WALL = 1,
  FLOOR = 2,
  CARGO = 3,
  END = 4,
}
export const useDiyMapStore = defineStore("diyMap", () => {
  const mapConfig = reactive<MapConfig>([
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42, 43, 44],
    [45, 46, 47, 48, 49, 50, 51, 52, 53],
    [54, 55, 56, 57, 58, 59, 60, 61, 62],
    [63, 64, 65, 66, 67, 68, 69, 70, 71],
    [72, 73, 74, 75, 76, 77, 78, 79, 80],
  ]);

  function updataMap(el: HTMLElement, id: DOMStringMap[string]) {
    const nodeClass = el.className;
    switch (nodeClass) {
      case MapClass.WALL:
        setMap(MapID.WALL, id);
        break;

      case MapClass.FLOOR:
        setMap(MapID.FLOOR, id);
        break;

      case MapClass.CARGO:
        setMap(MapID.CARGO, id);

        break;
      case MapClass.END:
        setMap(MapID.END, id);
        break;

      default:
        break;
    }
  }

  function setMap(enumID: MapID, posID: DOMStringMap[string]) {
    mapConfig.some((item) => {
      const index = item.findIndex((i) => i == Number(posID));
      if (index != -1) {
        item[index] = enumID;
        return true;
      }
    });
  }

  return { mapConfig, updataMap };
});
