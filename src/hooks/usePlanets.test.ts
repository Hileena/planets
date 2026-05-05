import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vitest, beforeEach, afterEach } from "vitest";
import { usePlanets } from "./usePlanets";

const mockEarth = {
  name: "Earth",
  mass: 5.97,
  radius: 1,
  period: 365,
  semi_major_axis: 1,
  temperature: 288,
  distance_light_year: 0.0000158,
  host_star_mass: 1,
  host_star_temperature: 5778,
};

describe("usePlanets", () => {
  beforeEach(() => {
    // Mock the fetch function to return the mocked earth planet data
    vitest.spyOn(globalThis, "fetch").mockResolvedValue({
      json: () => Promise.resolve([mockEarth]),
    } as Response);
  });

  afterEach(() => {
    vitest.restoreAllMocks();
  });

  it("should start with an empty array", () => {
    const { result } = renderHook(() => usePlanets());
    expect(result.current).toEqual([]);
  });

  it("should return planet data after fetching", async () => {
    const { result } = renderHook(() => usePlanets());

    await waitFor(() => {
      expect(result.current).toHaveLength(8);
    });

    expect(result.current[0]).toMatchObject({ name: "Earth", mass: 5.97 });
  });
});
