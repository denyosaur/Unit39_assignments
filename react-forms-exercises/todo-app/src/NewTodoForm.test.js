import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

//smoke test
test("NewTodoForm should render", () => {
    render(<NewTodoForm />)
})

//snapshot test
test("NewTodoForm should render", () => {
    const { asFragment } = render(<NewTodoForm />)
    expect(asFragment()).toMatchSnapshot();
})

