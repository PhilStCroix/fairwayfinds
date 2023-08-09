import React from "react";
import { render } from "@testing-library/react";
import ThankYou from "../components/ThankYou";

// Test the ThankYou component
describe("ThankYou component", () => {
  // Test the rendering of the congratulations message
  it("renders congratulations message", () => {
    const { getByText } = render(<ThankYou />);
    const messageElement = getByText(/Congratulations/i);
    expect(messageElement).toBeInTheDocument();
  });
});
