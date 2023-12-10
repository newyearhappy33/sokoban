import { defineStore } from "pinia";
import { reactive } from "vue";

type MapConfig = number[][];
type MapPosition = {
  x: number;
  y: number;
};
enum MapClass {
  WALL = "wall",
  FLOOR = "floor",
  CARGO = "cargo",
  END = "end",
}
export const useDiyMapStore = defineStore("diyMap", () => {
  const mapConfig = reactive<MapConfig>([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  function setMapPosition(dropNode: HTMLElement, e: DragEvent) {
    const rows = mapConfig.length; // 获取网格的行数
    const columns = mapConfig[0]?.length || 0; // 获取网格的列数，假设每行的元素个数相同
    // 获取拖放目标的坐标信息
    const rect = dropNode.getBoundingClientRect();

    // 计算相对位置
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    // 计算数组索引
    const column = Math.floor(offsetX / (rect.width / columns));
    const row = Math.floor(offsetY / (rect.height / rows));

    return { x: row, y: column };
  }

  function updataMap(pos: MapPosition) {
    console.log(pos);
  }

  return { mapConfig, setMapPosition, updataMap };
});
