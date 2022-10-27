import React, { FC } from 'react';
import Radius from '../../themes/Radius';
import Shadow from '../../themes/Shadow';

interface IColor {
  name: string;
  color?: string;
}

export const ColorDoc = ({ name, color }: IColor) => {
  return (
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <div
        style={{
          borderRadius: Radius.dull,
          width: '48px',
          height: '48px',
          boxShadow: Shadow.platform,
          marginRight: 16,
          backgroundColor: color,
        }}
      />
      <div>
        <div style={{ marginBottom: 4, fontWeight: 600, fontSize: 16 }}>{name}</div>
        <div>{color}</div>
      </div>
    </div>
  );
};

export const ColorDocWrapper: FC = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridGap: 32,
      gridTemplateColumns: 'repeat(3,1fr)',
      alignItems: 'start',
      marginTop: 32,
    }}
  >
    {children}
  </div>
);
