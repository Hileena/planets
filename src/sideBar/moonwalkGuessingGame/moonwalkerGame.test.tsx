import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MoonwalkerGame } from "./moonwalkerGame";

describe("moonwalkerGame", () => {
  it("should render the game modal with the correct details", () => {
    // Render the component
    render(<MoonwalkerGame onClose={() => {}} />);
    const modalElement = screen.getByTestId("moonwalker-game-modal");
    const header = screen.getByTestId("header");
    const subheader = screen.getByTestId("subheader");

    // Check if the the correct header is displayed
    expect(header).toHaveTextContent(
      "How many people have walked on the moon?",
    );

    // Check if the subheader is displayed
    expect(subheader).toHaveTextContent(
      "Try to guess the number of people who have moon walked!",
    );

    expect(modalElement).toBeInTheDocument();
  });

  it("should display the correct message when the guess is correct", () => {
    render(<MoonwalkerGame onClose={() => {}} />);
    const incrementButton = screen.getByTestId("increment-button");
    const submitButton = screen.getByTestId("submit-button");

    // Increment the guess to 12
    for (let i = 0; i < 12; i++) {
      fireEvent.click(incrementButton);
    }

    const numberDisplay = screen.getByTestId("number-display");
    expect(numberDisplay).toHaveTextContent("12 people");

    // Submit the guess
    fireEvent.click(submitButton);

    const correctMessage = screen.getByText("Correct!");
    expect(correctMessage).toBeInTheDocument();
  });

  it("should disable decrement button when guess is 0", () => {
    render(<MoonwalkerGame onClose={() => {}} />);
    const decrementButton = screen.getByTestId("decrement-button");
    expect(decrementButton).toBeDisabled();
  });

  it("should enable decrement button when guess is greater than 0", () => {
    render(<MoonwalkerGame onClose={() => {}} />);
    const incrementButton = screen.getByTestId("increment-button");
    const decrementButton = screen.getByTestId("decrement-button");

    // Increment the guess to 1
    fireEvent.click(incrementButton);
    expect(decrementButton).toBeEnabled();
  });

  it("should display the incorrect message when the guess is wrong", () => {
    render(<MoonwalkerGame onClose={() => {}} />);
    const submitButton = screen.getByTestId("submit-button");

    // Submit the guess without incrementing (guess is 0)
    fireEvent.click(submitButton);

    const incorrectMessage = screen.getByTestId("incorrect-message");
    expect(incorrectMessage).toBeInTheDocument();
  });
});
