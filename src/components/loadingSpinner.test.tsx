import { describe, it, expect } from "vitest";
import { LoadingSpinner } from "./loadingSpinner";
import { render, screen } from "@testing-library/react";

describe("LoadingSpinner", () => {
  it("should render the loading spinner", () => {
    // Render the component
    render(<LoadingSpinner />);
    const spinnerElement = screen.getByTestId("loading-spinner");

    // Check if the loading spinner is displayed
    expect(spinnerElement).toBeInTheDocument();
  });
});
