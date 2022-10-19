import { render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  //fin an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {});
