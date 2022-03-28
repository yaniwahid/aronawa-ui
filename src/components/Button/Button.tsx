import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { IButton } from './Button.types';
import { ColorEnum, colorProps } from '../../utils/Types';

const Button: React.FC<IButton> = ({ color, children, ...props }) => {
  return (
    <ChakraButton
      {...props}
      colorScheme={colorProps(color)}
      iconSpacing={props.size === 'sm' ? '1' : '2'}
      fontSize="lg"
      {...(color === ColorEnum.Light && { color: 'blue.500' })}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
