import React, { FC } from 'react';
import Button from '../Button';
import { Clear, IconWrapper, PreviewStyled } from './Preview.styles';
import { IPreview } from './Preview.types';

export const Preview: FC<IPreview> = ({
  imageUrl,
  onClear,
  isClearable,
  children,
  imageSize = '100%',
  boxHeight = '104px',
  boxWidth = '104px',
  teid = 'preview',
  buttonTeid = 'preview-clear',
  ...props
}) => {
  return (
    <PreviewStyled
      boxHeight={boxHeight}
      boxWidth={boxWidth}
      imageUrl={imageUrl}
      data-testid={teid}
      {...props}
    >
      {isClearable && (
        <Clear onClick={onClear}>
          <Button size="sm" icon="history" teid={buttonTeid} />
        </Clear>
      )}
      {imageUrl ? (
        <IconWrapper>
          <img src={imageUrl} alt={imageUrl} width={imageSize} />
        </IconWrapper>
      ) : (
        <IconWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140">
            <g fill="none" fill-rule="evenodd" stroke="#E1E3E6">
              <path
                fill="#E1E3E6"
                stroke-width="2"
                d="M18.3848337,88 L121.654697,88 L88.4999928,53.4443928 L62.8886079,80.1374139 L44.5000087,61.426664 L18.3848337,88 Z"
              />
            </g>
          </svg>
        </IconWrapper>
      )}
    </PreviewStyled>
  );
};

export default Preview;
