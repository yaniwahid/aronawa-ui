import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Error from './Error';

export default {
  title: 'Templates/Error',
  component: Error,
  argTypes: {},
} as ComponentMeta<typeof Error>;

export const Basic = () => {
  return (
    <Error
      title="Halaman tidak ditemukan"
      code="404"
      description={
        <>
          Mungkin alamat yang Anda tuju telah berubah atau tidak tersedia lagi.
          <br />
          Kami akan antar Anda...
        </>
      }
      imageUrl="https://static.bmdstatic.com/sf/assets/img/illustrator-404.png"
    />
  );
};
