import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Year on Footer', () => {
  render(<Footer />);
  const date = screen.getByText(/2022/i);
  expect(date).toBeInTheDocument();
});
