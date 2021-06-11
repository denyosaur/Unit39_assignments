import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

//smoke test
test("TodoList should render", () => {
    render(<TodoList />)
})

//snapshot test
test("TodoList should render", () => {
    const { asFragment } = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot();
})

//render form and test box
test("render form", () => {
    const { getByPlaceholderText } = render(<TodoList />);
    const taskInput = getByPlaceholderText("Enter Task Here");

    expect(taskInput).toBeInTheDocument();
});

test("render test box", () => {
    const { getByText } = render(<TodoList />);
    const btn = getByText("X");

    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    expect(btn).not.toBeInTheDocument();
});
