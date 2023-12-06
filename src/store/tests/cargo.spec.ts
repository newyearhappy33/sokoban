import { createPinia, setActivePinia } from "pinia";
import { it, describe, expect, beforeEach } from "vitest";
import { useCargoStore } from "../cargo";
describe("cargo", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    const newCargos = [
      { id: 1, x: 1, y: 1 },
      { id: 2, x: 2, y: 2 },
    ];
    const { setupCargos } = useCargoStore();
    setupCargos(newCargos);
  });

  it("get Cargo position", () => {
    const { getCargoPosition } = useCargoStore();
    expect(getCargoPosition()).toEqual([
      {
        x: 1,
        y: 1,
      },
      {
        x: 2,
        y: 2,
      },
    ]);
  });

  it("should not move to left when collision a wall", () => {
    const { moveCargoToLeft, cargos } = useCargoStore();
  });
});
