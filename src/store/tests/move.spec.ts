import { createPinia, setActivePinia } from "pinia";
import { it, expect, describe, beforeEach } from "vitest";
import { useCargoPlayer } from "../../composables/usePosition";
import { useCargoStore } from "../cargo";
import { usePlayerStore } from "../player";
describe("map", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should map", () => {
    const { getPlayerPosition, setupPlayer } = usePlayerStore();
    const { getCargoPosition, setupCargos } = useCargoStore();
    const newPosition = { x: 1, y: 1 };
    setupPlayer(newPosition);
    setupCargos([
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ]);

    expect(useCargoPlayer(getPlayerPosition(), getCargoPosition())).toEqual(
      true
    );
  });

  it("should player move to cargo", () => {});
});
