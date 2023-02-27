import React from 'react';

import { ButtonWrapper } from './Button.styles';

interface ButtonProps {
  onClick?: () => void;
  children: any;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <ButtonWrapper onClick = {onClick}>
    {children}
  </ButtonWrapper>
);

export default Button;