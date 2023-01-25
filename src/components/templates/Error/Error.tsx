import React from 'react';
import Button from '../../atoms/Button';
import { Content, ErrorStyled, Image } from './Error.styles';
import { IError } from './Error.types';

const Error: React.FC<IError> = ({ title, code, description, imageUrl }) => {
  return (
    <ErrorStyled>
      <Image>
        <img src={imageUrl} alt={title} />
      </Image>
      <Content>
        <h1>{title}</h1>
        <small>Error Code: {code}</small>
        <p>{description}</p>
        <Button icon="home" color="primary" href="/" size="lg">
          Kembali ke Home
        </Button>
      </Content>
    </ErrorStyled>
  );
};

export default Error;
