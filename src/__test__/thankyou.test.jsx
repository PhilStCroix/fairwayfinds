import React from "react";
import { render } from "@testing-library/react";
import ThankYou from "../components/ThankYou";

describe("ThankYou component", () => {
  it("renders congratulations message", () => {
    const { getByText } = render(<ThankYou />);
    const messageElement = getByText(/Congratulations/i);
    expect(messageElement).toBeInTheDocument();
  });
});
