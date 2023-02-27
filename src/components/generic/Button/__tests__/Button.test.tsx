import '@testing-library/jest-dom';

import React from 'react';

import {
  fireEvent,
  render,
} from '@testing-library/react';

import Button from '../Button';

describe('Button', () => {
  it('renders a button element with the provided children', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    const buttonElement = getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click me');
  });

  it('calls the onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = getByRole('button');
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
