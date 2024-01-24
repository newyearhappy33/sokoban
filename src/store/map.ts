import { defineStore } from "pinia";
import { Cargo, Direction, Position } from "../composables/usePosition";
export enum MapTile {
  WALL = 1,
  FLOOR = 2,
  END = 3,
}

export const useMapStore = defineStore("map", () => {
  let map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 1, 1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 3, 3, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  function initMap() {
    map.splice(0, map.length);
    map.push(
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 1, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 1, 1, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 3, 3, 2, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    );
  }

  /**
   *
   * @param {position} 坐标位置
   * @param {keyDown} 键盘按键
   * @returns Boolean
   * @description 检测是否撞墙
   */
  function isWall(position: Position, playID: number, keyDown?: String) {
    if (playID === 0) {
      switch (keyDown) {
        case Direction.LEFT:
          return map[position[0].y][position[0].x - 1] === MapTile.WALL;
        case Direction.RIGHT:
          return map[position[0].y][position[0].x + 1] === MapTile.WALL;
        case Direction.DOWN:
          return map[position[0].y + 1][position[0].x] === MapTile.WALL;
        case Direction.TOP:
          return map[position[0].y - 1][position[0].x] === MapTile.WALL;
        default:
          return false;
      }
    }
  }

  /**
   * @description 检测箱体是否撞墙
   */
  function cargoIntoWall(cargoPos: Cargo): boolean {
    return cargoPos.some((item) => {
      return map[item.y][item.x] === MapTile.WALL;
    });
  }

  /**
   * @description 检测箱体前方是否有箱体
   */
  function isCargos(pos: Position, cargos: Cargo) {
    return cargos.some((item: any) => {
      return item.x === pos[0].x && item.y === pos[0].y;
    });
  }

  /**
   * @description 判断箱子是否全部到达目的地
   */
  function cargosToEnd(cargos: Cargo) {
    return cargos.every((item) => {
      return map[item.y][item.x] === MapTile.END;
    });
  }

  function setDiyMap() {
    const mapConfig = JSON.parse(localStorage.getItem("map") as string);
    if (!mapConfig) return alert("地图加载异常!");
    if (!Array.isArray(mapConfig)) return alert("地图加载异常!");

    const mapArray = mapConfig.map((subArray) => {
      return subArray.map((item: number) => {
        // 检查每个元素，如果大于3，则设置为2，否则保持原值
        return item > 3 ? 2 : item;
      });
    });
    map.splice(0, map.length, ...mapArray); // 清空数组并添加新的元素
  }

  return {
    map,
    isWall,
    initMap,
    isCargos,
    setDiyMap,
    cargosToEnd,
    cargoIntoWall,
  };
});
