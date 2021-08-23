/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders acid playhouse text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/acid playhouse/i);
  expect(linkElement).toBeInTheDocument();
});
