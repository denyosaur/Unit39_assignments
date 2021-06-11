import { render, fireEvent } from '@testing-library/react';
import BoxList from '../BoxList';

//smoke test for Box
test('renders Box without crashing', () => {
    render(<BoxList />);
});

//snapshot test for Box
test('should match snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

//render form and test box
test("render form", () => {
    const { getByText } = render(<BoxList />);
    const height = getByText("Height:");
    const width = getByText("Width:");
    const color = getByText("Color:");

    expect(height).toBeInTheDocument();
    expect(width).toBeInTheDocument();
    expect(color).toBeInTheDocument();
});

test("render test box", () => {
    const { getByText } = render(<BoxList />);
    const btn = getByText("X");

    expect(btn).toBeInTheDocument();
});

