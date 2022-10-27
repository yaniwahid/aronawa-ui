import React, { FC } from 'react';
import Color from '../../themes/Color';
import Radius from '../../themes/Radius';

interface IShadow {
  name: string;
  shadow?: string;
}

export const ShadowDoc = ({ name, shadow }: IShadow) => {
  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        width: '100%',
        height: '160px',
        borderRadius: Radius.dull,
        boxShadow: shadow,
        justifyContent: 'center',
        background: Color.slate[50],
      }}
    >
      <div style={{ fontSize: 16 }}>{name}</div>
    </div>
  );
};

export const ShadowDocWrapper: FC = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridGap: 32,
      gridTemplateColumns: 'repeat(3,1fr)',
      alignItems: 'start',
    }}
  >
    {children}
  </div>
);
