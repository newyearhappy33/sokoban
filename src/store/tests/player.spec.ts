import { createPinia, setActivePinia } from "pinia";
import { it, expect, describe, beforeEach } from "vitest";
import { useMapStore } from "../map";
import { usePlayerStore } from "../player";
/*
    left right down up  movefunction tests
*/
describe("player", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("normal move", () => {
    beforeEach(() => {
      const { setupMap } = useMapStore();
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ]);
    });

    it("should move to left", () => {
      const { movePlayerToLeft, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToLeft();
      expect(player.x).toBe(0);
    });

    it("should move to right", () => {
      const { movePlayerToRight, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToRight();
      expect(player.x).toBe(2);
    });

    it("should move to down", () => {
      const { movePlayerToDown, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToDown();
      expect(player.y).toBe(2);
    });

    it("should move to up", () => {
      const { movePlayerToUp, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToUp();
      expect(player.y).toBe(0);
    });
  });

  describe("collision wall", () => {
    beforeEach(() => {
      let map = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1],
      ];
      const { setupMap } = useMapStore();
      setupMap(map);
    });

    it("should not move to left when collision a wall", () => {
      const { movePlayerToLeft, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToLeft();
      expect(player.x).toBe(1);
    });
    it("should not move to left when collision a wall", () => {
      const { movePlayerToRight, player } = usePlayerStore();
      player.x = 3;
      player.y = 1;
      movePlayerToRight();
      expect(player.x).toBe(3);
    });
    it("should not move to left when collision a wall", () => {
      const { movePlayerToUp, player } = usePlayerStore();
      player.x = 1;
      player.y = 1;
      movePlayerToUp();
      expect(player.y).toBe(1);
    });
    it("should not move to left when collision a wall", () => {
      const { movePlayerToDown, player } = usePlayerStore();
      player.x = 1;
      player.y = 3;
      movePlayerToDown();
      expect(player.y).toBe(3);
    });
  });

  describe("player position", () => {
    it("get Player position", () => {
      const { getPlayerPosition, setupPlayer } = usePlayerStore();
      const newPlayer = {
        x: 2,
        y: 2,
      };
      setupPlayer(newPlayer);
      expect(getPlayerPosition()).toEqual({
        x: 2,
        y: 2,
      });
    });
  });
});
