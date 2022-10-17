import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Breadcrumb, { BreadcrumbItem } from './Breadcrumb';
import { IBreadcrumb } from './Breadcrumb.types';

export default {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

export const Basic = (args: IBreadcrumb) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem>
      <a href="/">Kategori Produk</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="/">Peralatan Rumah Tangga</a>
    </BreadcrumbItem>
    <BreadcrumbItem>Ruang Tamu</BreadcrumbItem>
  </Breadcrumb>
);
