import React from "react";
import { render } from "@testing-library/react";
import Footer from "../shared/Footer";

describe("Footer component", () => {
  it("renders copyright text", () => {
    const { getByText } = render(<Footer />);

    const copyrightText = getByText(/Copyright © 2023 Fairway Finds/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
