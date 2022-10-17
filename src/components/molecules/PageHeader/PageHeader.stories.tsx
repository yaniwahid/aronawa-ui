import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Button from '../../atoms/Button';
import Breadcrumb, { BreadcrumbItem } from '../Breadcrumb';
import PageHeader from '../PageHeader';
import { IPageHeader } from './PageHeader.types';

export default {
  title: 'Molecules/Page Header',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

export const Basic = (args: IPageHeader) => {
  return (
    <PageHeader
      title="Daftar Produk"
      subtitle="Berikut ini Informasi produk yang kamu jual pada Toko Anda"
      back="/"
      {...args}
    >
      <Button>Export as .csv</Button>
      <Button color="primary">Tambah Produk</Button>
    </PageHeader>
  );
};

export const WithBreadcrumb = (args: IPageHeader) => {
  return (
    <PageHeader
      title="Daftar Produk"
      subtitle="Berikut ini Informasi produk yang kamu jual pada Toko Anda"
      breadcrumb={
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Dashboard</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/">Produk</a>
          </BreadcrumbItem>
          <BreadcrumbItem>Daftar Produk</BreadcrumbItem>
        </Breadcrumb>
      }
      {...args}
    >
      <Button>Export as .csv</Button>
      <Button color="primary">Tambah Produk</Button>
    </PageHeader>
  );
};
