import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import Input from '../../atoms/Input';
import Radio from '../../atoms/Radio';
import Select, { Option } from '../../atoms/Select';
import Switch from '../../atoms/Switch';
import Tooltip from '../../atoms/Tooltip';
import Card from '../Card';
import Form, { FormItem } from './Form';
import { IForm } from './Form.types';

export default {
  title: 'Molecules/Form',
  component: Form,
  argTypes: {
    layout: {
      name: 'layout',
      defaultValue: 'horizontal',
      description: 'Use the layout prop to change the layout of the Form',
      table: {
        type: {
          summary: 'horizontal | vertical',
        },
        defaultValue: { summary: 'horizontal' },
      },
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
    formWidth: {
      name: 'formWidth',
      defaultValue: '200px 1fr',
      description: 'Use the formWidth prop to change the formWidth of the Form',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '200px 386px' },
      },
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Form>;

export const Basic = (args: IForm) => (
  <Card
    title="Data Produk"
    footer={
      <>
        <Button>Cancel</Button>
        <Button color="primary">Save</Button>
      </>
    }
  >
    <Form {...args}>
      <FormItem label="Status Produk" isRequired>
        <Switch unCheckedLabel="Dijual" />
      </FormItem>
      <FormItem label="Jenis Produk" isRequired>
        <Radio
          data={[
            { label: 'Fisik', value: '1' },
            { label: 'Non Fisik', value: '1' },
          ]}
        />
        <Tooltip placement="top" overlay="Pelatihan/Training">
          <Icon name="question-circle" style={{ marginRight: 8 }} />
        </Tooltip>
      </FormItem>
      <FormItem
        label="Nama Produk"
        isRequired
        extra="Nama produk min. 5 kata menggunakan angka atau huruf dan hanya dapat menggunakan simbol & . / % () + -"
        help="0 / 150 · Min 5 karakter"
      >
        <Input />
      </FormItem>
      <FormItem label="Produk Buatan" formWidth="200px 240px">
        <Select placeholder="Pilih Produk Buatan">
          <Option value="1">Dalam Negeri</Option>
          <Option value="2">Luar Negeri</Option>
        </Select>
      </FormItem>
      <FormItem label="Harga Produk">
        <Input leftAddon="Rp" style={{ width: 240 }} />
      </FormItem>
      <FormItem label="Berat Produk">
        <Input rightAddon="kg" style={{ width: 240 }} />
      </FormItem>
      <FormItem label="SKU Produk" isRequired isInvalid invalidText="SKU Produk Harus Diisi">
        <Input isInvalid />
      </FormItem>
      <FormItem label={<></>}>
        <Button color="primary">Add Item</Button>
      </FormItem>
    </Form>
  </Card>
);
