import React from 'react';
import { render, screen } from '@testing-library/react';
import CardBalanceBlock from './index';

test('renders Card Balance with correct values', () => {
  render(<CardBalanceBlock balance={17.3} limit={1500} />);
  expect(screen.getByText('Card Balance')).toBeInTheDocument();
  expect(screen.getByText('$17.30')).toBeInTheDocument();
  expect(screen.getByText('$1482.70 Available')).toBeInTheDocument();
});