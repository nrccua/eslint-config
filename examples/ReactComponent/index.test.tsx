import { fireEvent, render } from '@testing-library/react';

import ReactComponent from '.';

test('renders button and handles click events', () => {
  const { getByText } = render(<ReactComponent />);
  const button = getByText(/Button Clicks:/i);

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('Button Clicks: 0');

  fireEvent.click(button);
  expect(button).toHaveTextContent('Button Clicks: 1');

  fireEvent.click(button);
  expect(button).toHaveTextContent('Button Clicks: 2');
});
