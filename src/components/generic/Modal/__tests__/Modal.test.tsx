import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import {
  fireEvent,
  render,
} from '@testing-library/react';

import Modal from '../Modal';

describe('Modal component', () => {
  const handleClose = jest.fn();

  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    expect(getByTestId('modal-content')).toBeInTheDocument();
  });

  it('renders nothing if isOpen is false', () => {
    const { container } = render(
      <Modal isOpen={false} onClose={handleClose}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    expect(container.firstChild).toBeNull();
  });

  it('calls onClose when close button is clicked', () => {
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={handleClose}>
        <div data-testid="modal-content">Modal Content</div>
      </Modal>
    );

    fireEvent.click(getByTestId('modal-close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Renders the modals close component with the expected styles', () => {
    const { getByTestId } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );

    const close = getByTestId('modal-close');

    expect(close).toHaveStyle('cursor: pointer');
    expect(close).toHaveStyle('color: rgba(0, 0, 0, 1)');
    expect(close).toHaveStyle('font-size: 24px');
    expect(close).toHaveStyle('line-height: 0');
    expect(close).toHaveStyle('position: absolute');
    expect(close).toHaveStyle('top: 0');
    expect(close).toHaveStyle('right: 0');
  });

});

/*
  TODO - Following are some more test cases that can be implemented
  Renders when isOpen is true - Set isOpen prop to true and check if the modal is rendered.
  Renders the close button with the FaTimes icon - Set isOpen prop to true and check if the close button is rendered with the FaTimes icon.
  Renders the modal with the expected styles - Check if the modal is rendered with the expected styles, as an example I have did it for close component of the Modal.
*/