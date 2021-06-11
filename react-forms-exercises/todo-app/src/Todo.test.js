import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

//smoke test
test("Todo should render", () => {
    render(<Todo />)
})

//snapshot test
test("Todo should render", () => {
    const { asFragment } = render(<Todo />)
    expect(asFragment()).toMatchSnapshot();
})

//Delete button is present
test("Delete Todo", () => {
    const { getByText } = render(<Todo task="clean stuff" />);
    const btn = getByText("X");
    expect(btn).toBeInTheDocument();
})