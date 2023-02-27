import styled from 'styled-components';

export const ModalContent = styled.div`
  font-family: "Open Sans";
  position: absolute;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 120px;
  width: 750px;
  height: auto;
  margin: 0 auto;
  background: #ffffff;
  border: none;
  border-radius: 0;
  outline: none;
  padding: 24px;
  overflow: auto;
`;

export const ModalOverlay = styled.div`
  font-family: "Open Sans";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContentHelper = styled.div`
  position: relative;
  height: 100%;
  padding: 64px 0;
`;

export const ModalClose = styled.div`
  cursor: pointer;
  color: rgba(0, 0, 0, 1);
  font-size: 24px;
  line-height: 0;
  position: absolute;
  top: 0;
  right: 0;
`;