import { createPinia, setActivePinia } from "pinia";
import { it, expect, describe, beforeEach } from "vitest";
import { useMapStore } from "../map";

describe("map", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it("should map", () => {
    const { map } = useMapStore();
    expect(map).toEqual([
      [1, 1, 1, 1, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 1, 1, 1, 1],
    ]);
  });
  it("should setup map", () => {
    const { map, setupMap } = useMapStore();
    const newMap = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
    setupMap(newMap);
    expect(map).toEqual(newMap);
  });
});
