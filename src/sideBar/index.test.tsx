import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SidePanel } from ".";

describe("SidePanel", () => {
  it("should render the SidePanel component", () => {
    // Render the component
    render(<SidePanel selectedPlanet={null} />);

    // Check if the header is displayed
    const header = screen.getByTestId("solar-system-header");
    expect(header).toBeInTheDocument();

    // Check if the prompt to click on a planet is displayed
    const prompt = screen.getByTestId("planet-prompt");
    expect(prompt).toBeInTheDocument();

    // Check if the guessing game button is displayed
    const guessingGameButton = screen.getByTestId("guessing-game-button");
    expect(guessingGameButton).toBeInTheDocument();
  });

  it("should display the correct planet details when a planet is selected", () => {
    // Render the component with a selected planet
    render(<SidePanel selectedPlanet="Mars" />);

    // Check if the planet details component is displayed
    const planetDetails = screen.getByText("Mars");
    expect(planetDetails).toBeInTheDocument();
  });

  it("should display the moonwalker guessing game when the button is clicked", () => {
    // Render the component
    render(<SidePanel selectedPlanet={null} />);

    // Click the guessing game button
    const guessingGameButton = screen.getByTestId("guessing-game-button");
    fireEvent.click(guessingGameButton);

    // Check if the moonwalker guessing game modal is displayed
    const modalElement = screen.getByTestId("moonwalker-game-modal");
    expect(modalElement).toBeInTheDocument();
  });
});
