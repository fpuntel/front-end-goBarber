import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// cria um tipo igual ao ButtonHTML
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
