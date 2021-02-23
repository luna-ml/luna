import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Luna', () => {
  render(<App />);
  const linkElement = screen.getByText(/Luna/i);
  expect(linkElement).toBeInTheDocument();
});
