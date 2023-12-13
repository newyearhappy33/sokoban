import { defineStore } from "pinia";
import { Cargo, Direction, Position } from "../composables/usePosition";
export enum MapTile {
  WALL = 1,
  FLOOR = 2,
}
type Map = MapTile[][];

export const useMapStore = defineStore("map", () => {
  let map = [
    [1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1],
  ];

  function setupMap(newMap: Map) {
    map.splice(0, map.length, ...newMap);
  }

  /**
   *
   * @param position 坐标位置
   * @param keyDown 键盘按键
   * @returns Boolean
   * @description 检测是否撞墙
   */
  function isWall(position: Position, playID: number, keyDown?: String) {
    if (playID === 1) {
      debugger;
      switch (keyDown) {
        case Direction.KeyA:
          return position.some((item) => {
            return map[item.y][item.x - 1] === MapTile.WALL;
          });
        case Direction.KeyD:
          return position.some((item) => {
            return map[item.y][item.x + 1] === MapTile.WALL;
          });
        case Direction.KeyS:
          return position.some((item) => {
            return map[item.y + 1][item.x] === MapTile.WALL;
          });
        case Direction.KeyW:
          return position.some((item) => {
            return map[item.y - 1][item.x] === MapTile.WALL;
          });
        default:
          return false;
      }
    } else if (playID === 0) {
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
    if (pos.length > 1) {
      return pos.some((item) => {
        return cargos.some((cargo: any) => {
          return cargo.x === item.x && cargo.y === item.y;
        });
      });
    } else {
      return cargos.some((item: any) => {
        return item.x === pos[0].x && item.y === pos[0].y;
      });
    }
  }
  return { map, setupMap, isWall, isCargos, cargoIntoWall };
});
