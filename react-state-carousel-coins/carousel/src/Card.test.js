import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

//smoke test
test("card loads properly", () => {
    render(<Card />);
});

//snapshot test
test("card matches snapshot", () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
});