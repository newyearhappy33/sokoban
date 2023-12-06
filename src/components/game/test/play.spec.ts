import { createPinia, setActivePinia } from "pinia";
import { it, expect, beforeEach } from "vitest";
import { useMapStore } from "../../../store/map";
import { usePlayerStore } from "../../../store/player";
import { useMove } from "../player";

beforeEach(() => {
  setActivePinia(createPinia());
});
it("should move to left when press ArrowLeft", () => {
  const { setupMap } = useMapStore();
  setupMap([
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ]);
  const { player } = usePlayerStore();
  player.x = 1;
  player.y = 1;
  useMove();
  // 模拟按下键盘
  window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowLeft" }));
  expect(player.x).toBe(0);
});
