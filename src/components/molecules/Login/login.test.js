import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '.';

test('renders login form', () => {
  const { getByText } = render(<Login />);
  const linkElement = getByText(/Login form/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders input in login form', () => {
    expect(screen.getbyRole('input')).toBeInTheDocument();
});

test('renders submit button', () => {
    const linkElement = getByText(/Login form/i);
    expect(linkElement).toBeInTheDocument();
});