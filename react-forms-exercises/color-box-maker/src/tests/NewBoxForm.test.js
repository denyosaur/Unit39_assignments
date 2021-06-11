import { fireEvent, render, screen } from '@testing-library/react';
import NewBoxForm from '../NewBoxForm';

//smoke test for Box
test('renders Box without crashing', () => {
    render(<NewBoxForm />);
});

//snapshot test for Box
test('should match snapshot', () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

