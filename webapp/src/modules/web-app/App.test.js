import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('rendering page with title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Pokedex/i);
  expect(title).toBeInTheDocument();
});
