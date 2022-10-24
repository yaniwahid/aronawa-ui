import React, { FC } from 'react';
import Color from '../../themes/Color';
import Shadow from '../../themes/Shadow';

interface IRadius {
  name: string;
  radius?: string;
}

export const RadiusDoc = ({ name, radius }: IRadius) => {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        width: '160px',
        height: '160px',
        borderRadius: radius,
        boxShadow: Shadow.platform,
        justifyContent: 'center',
        border: `1px solid ${Color.slate[200]}`,
        margin: '0 auto',
        background: Color.slate[50],
      }}
    >
      <div style={{ fontSize: '16px' }}>{name}</div>
    </div>
  );
};

export const RadiusDocWrapper: FC = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridGap: '6',
      gridTemplateColumns: 'repeat(3,1fr)',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </div>
);
