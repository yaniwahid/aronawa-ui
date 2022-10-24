import React, { FC } from 'react';
import Icon from '../../components/atoms/Icon';
import Color from '../../themes/Color';
import Radius from '../../themes/Radius';
import Shadow from '../../themes/Shadow';
import { data } from './IconData';

interface IIcon {
  name?: string;
}

export const IconDoc = ({ name }: IIcon) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '14',
          height: '14',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Color.slate[50],
          borderRadius: Radius.dull,
          boxShadow: Shadow.platform,
          display: 'flex',
          padding: 8,
        }}
      >
        <Icon name={name} size={40} />
      </div>
      <div style={{ marginTop: 8, fontSize: 12, textAlign: 'center' }}>{name}</div>
    </div>
  );
};

export const IconDocs = () => {
  return data.map((item) => <IconDoc name={item.name} />);
};

export const IconDocWrapper: FC = ({ children }) => (
  <div
    style={{
      display: 'grid',
      gridGap: '6',
      gridTemplateColumns: 'repeat(8,1fr)',
      alignItems: 'start',
    }}
  >
    {children}
  </div>
);
