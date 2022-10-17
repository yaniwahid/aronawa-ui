import React, { FC } from 'react';
import Button from '../Button';
import { Clear, IconWrapper, PreviewStyled } from './Preview.styles';
import { IPreview } from './Preview.types';

export const Preview: FC<IPreview> = ({
  iconUrl,
  imageUrl,
  onClear,
  isClearable,
  children,
  iconSize = '64px',
  boxHeight = '128px',
  boxWidth = '128px',
  ...props
}) => {
  return (
    <PreviewStyled boxHeight={boxHeight} boxWidth={boxWidth} imageUrl={imageUrl} {...props}>
      {isClearable && (
        <Clear onClick={onClear}>
          <Button size="sm" icon="undo" />
        </Clear>
      )}
      {iconUrl && (
        <IconWrapper>
          <img src={iconUrl} alt={iconUrl} width={iconSize} height={iconSize} />
        </IconWrapper>
      )}
    </PreviewStyled>
  );
};

export default Preview;
