import { fireEvent, render } from '@testing-library/react';
import { expect, test } from 'vitest';

import ReactComponent from '.';

test('renders button and handles click events', () => {
  const { getByText } = render(<ReactComponent />);
  const button = getByText(/Button Clicks:/i);

  expect(button).not.toBeNull();
  expect(button.textContent).toBe('Button Clicks: 0');

  fireEvent.click(button);
  expect(button.textContent).toBe('Button Clicks: 1');

  fireEvent.click(button);
  expect(button.textContent).toBe('Button Clicks: 2');
});
