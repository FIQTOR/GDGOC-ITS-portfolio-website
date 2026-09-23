import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage hero', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /fullstack developer & creative technologist/i,
    })
  ).toBeInTheDocument();
});
