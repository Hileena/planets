import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vitest } from "vitest";
import { PlanetDetails } from "./planetDetails";
import { usePlanets } from "../../hooks/usePlanets";

const mockPlanets = [
  {
    name: "Earth",
    mass: 5.97,
    radius: 1,
    period: 365,
    semi_major_axis: 1,
    temperature: 288,
    distance_light_year: 0.0000158,
    host_star_mass: 1,
    host_star_temperature: 5778,
  },
  {
    name: "Mars",
    mass: 0.107,
    radius: 0.532,
    period: 687,
    semi_major_axis: 1.524,
    temperature: 210,
    distance_light_year: 0.0000158,
    host_star_mass: 1,
    host_star_temperature: 5778,
  },
];

vitest.mock("../../hooks/usePlanets", () => ({
  usePlanets: vitest.fn(() => mockPlanets),
}));

describe("planetDetails", () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it("should render the planet details correctly", () => {
    render(<PlanetDetails planet="Earth" />);
    const planetDetailsList = screen.getByTestId("planet-details-list");

    // Check if the planet details are displayed
    const massDetail = screen.getByTestId("mass-detail");
    const radiusDetail = screen.getByTestId("radius-detail");
    const periodDetail = screen.getByTestId("period-detail");
    const semiMajorAxisDetail = screen.getByTestId("semi-major-axis-detail");
    const temperatureDetail = screen.getByTestId("temperature-detail");
    const distanceDetail = screen.getByTestId("distance-detail");

    expect(planetDetailsList).toBeInTheDocument();
    expect(massDetail).toHaveTextContent("Mass");
    expect(massDetail).toHaveTextContent("5.97 Earth masses");

    expect(radiusDetail).toHaveTextContent("Radius");
    expect(radiusDetail).toHaveTextContent("1 Earth radii");

    expect(periodDetail).toHaveTextContent("Orbital Period");
    expect(periodDetail).toHaveTextContent("365 days");

    expect(semiMajorAxisDetail).toHaveTextContent("Semi-Major Axis");
    expect(semiMajorAxisDetail).toHaveTextContent("1 AU");

    expect(temperatureDetail).toHaveTextContent("Temperature");
    expect(temperatureDetail).toHaveTextContent("288 K");

    expect(distanceDetail).toHaveTextContent("Distance from Earth");
    expect(distanceDetail).toHaveTextContent("0.0000158 light years");
  });

  it("should display a loading spinner when planet data is not available yet", () => {
    vitest.mocked(usePlanets).mockReturnValueOnce([]);

    render(<PlanetDetails planet="Earth" />);
    const loadingSpinner = screen.getByTestId("loading-spinner");

    expect(loadingSpinner).toBeInTheDocument();
  });

  it("should display a message when the selected planet is not found", () => {
    render(<PlanetDetails planet="Venus" />);
    const errorMessage = screen.getByTestId("planet-error");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(
      "Planet not found. Please click on a valid planet to see its details.",
    );
  });
});
