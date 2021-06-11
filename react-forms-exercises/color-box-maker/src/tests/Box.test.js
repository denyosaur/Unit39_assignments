import { render, fireEvent } from '@testing-library/react';
import Box from '../Box';

//smoke test for Box
test('renders Box without crashing', () => {
    render(<Box height="100" width="100" backgroundColor="black" />);
});

//snapshot test for Box
test('should match snapshot', () => {
    const { asFragment } = render(<Box height="100" width="100" backgroundColor="black" />);
    expect(asFragment()).toMatchSnapshot();
});

//render and deleting box
test("should render and delete Box", () => {
    const { getByText } = render(<Box height="100" width="100" backgroundColor="black" />);
    const btn = getByText("X");
    expect(btn).toBeInTheDocument;

    fireEvent.click(btn);

    expect(btn).not.toBeInTheDocument;
})