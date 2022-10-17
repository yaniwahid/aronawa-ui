import React from 'react';
import { ChildStyled, EmptyStyled } from './Empty.styles';
import { IEmpty } from './Empty.types';

const Empty: React.FC<IEmpty> = ({
  imageUrl,
  title,
  description,
  children,
  imageWidth,
  ...props
}) => {
  return (
    <EmptyStyled {...props}>
      <img src={imageUrl} style={{ width: imageWidth }} />
      <h4>{title}</h4>
      {description && <p>{description}</p>}
      {children && <ChildStyled>{children}</ChildStyled>}
    </EmptyStyled>
  );
};

export default Empty;
