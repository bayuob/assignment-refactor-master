import React from 'react';

import { FaTimes } from 'react-icons/fa';

import {
  ModalClose,
  ModalContent,
  ModalContentHelper,
  ModalOverlay,
} from './Modal.styles';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: any;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalContentHelper>
              <ModalClose onClick={onClose} data-testid="modal-close">
                <FaTimes />
              </ModalClose>
              {children}
            </ModalContentHelper>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;