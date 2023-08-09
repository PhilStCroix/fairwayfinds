import React from "react";
import { render } from "@testing-library/react";
import Footer from "../shared/Footer";

// Describe a test suite for the Footer component
describe("Footer component", () => {
  // Define a test case for rendering copyright text
  it("renders copyright text", () => {
    // Render the Footer Component
    const { getByText } = render(<Footer />);
    // Use the getByText function to find the copyright text in the rendered component
    const copyrightText = getByText(/Copyright © 2023 Fairway Finds/i);

    // Assert that the copyright text is in the document
    expect(copyrightText).toBeInTheDocument();
  });
});
