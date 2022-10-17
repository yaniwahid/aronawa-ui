import React from 'react';
import { IEmpty } from './emptyState.types';
import { EmptyStyled, ChildStyled } from './emptyState.styles';

const EmptyState: React.FC<IEmpty> = ({
  imgUrl,
  title,
  description,
  children,
  teid,
  width,
  ...props
}) => {
  return (
    <EmptyStyled data-te-id={teid} {...props}>
      <img src={imgUrl} style={{ width: width }} />
      <h4>{title}</h4>
      {description && <p>{description}</p>}
      {children && <ChildStyled>{children}</ChildStyled>}
    </EmptyStyled>
  );
};

EmptyState.displayName = 'EmptyState';

export default EmptyState;
