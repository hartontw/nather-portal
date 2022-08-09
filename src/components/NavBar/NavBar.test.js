import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './NavBar';

test('NavBar About', () => {
  render(<Router><NavBar /></Router>);
  const about = screen.getByText(/About/i);
  expect(about).toBeInTheDocument();
});
