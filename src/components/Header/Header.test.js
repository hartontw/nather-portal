import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';

test('About in header', () => {
  render(<Router><Header /></Router>);
  const name = screen.getByText(/About/i);
  expect(name).toBeInTheDocument();
});
