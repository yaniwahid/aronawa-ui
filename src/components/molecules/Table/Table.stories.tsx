import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Color } from '../../../themes';
import Badge from '../../atoms/Badge';
import Button from '../../atoms/Button';
import Dropdown, { DropdownItem, DropdownMenu } from '../../atoms/Dropdown';
import Table from '../Table';
import { ITable } from './Table.types';

export default {
  title: 'Molecules/Table',
  component: Table,
  argTypes: {
    isLoading: {
      name: 'isLoading',
      defaultValue: false,
      description: 'Use the isLoading prop to change the isLoading of the Table',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Table>;

const menu = (
  <DropdownMenu>
    <DropdownItem icon="copy">Duplicate</DropdownItem>
    <DropdownItem icon="edit-alt">Rename</DropdownItem>
    <DropdownItem icon="eye">Preview</DropdownItem>
    <DropdownItem icon="trash" color={Color.danger.default}>
      Delete
    </DropdownItem>
  </DropdownMenu>
);

const columns: any = [
  {
    title: 'Merchant ID',
    dataIndex: 'merchantid',
    key: 'merchantid',
    sort: true,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sort: true,
    render: (status: string) => {
      let color: any;
      switch (status.toLowerCase()) {
        case 'active':
          color = 'approval';
          break;
        case 'inactive':
          color = 'danger';
          break;
        case 'unverified':
          color = 'secondary';
          break;
        default:
          return <></>;
      }
      return <Badge color={color}>{status}</Badge>;
    },
  },
  {
    title: 'Merchant Name',
    dataIndex: 'merchantname',
    key: 'merchantname',
    sort: true,
    sortDirection: 'ascending',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (type: string) => {
      let color: any;
      switch (type?.toLowerCase()) {
        case 'perorangan':
          color = 'primary';
          break;
        case 'perusahaan':
          color = 'secondary';
          break;
        default:
          return <></>;
      }
      return (
        <div className="column-left">
          <Badge color={color} variant="indicator">
            {type}
          </Badge>
          <Badge color="primary">PKP</Badge>
        </div>
      );
    },
  },
  {
    title: 'Store',
    dataIndex: 'store',
    key: 'store',
    render: (store: string) => {
      let color: any;
      switch (store.toLowerCase()) {
        case 'open':
          color = 'primary';
          break;
        case 'close':
          color = 'danger';
          break;
        default:
          return <></>;
      }
      return (
        <Badge color={color} variant="subtle">
          {store}
        </Badge>
      );
    },
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    align: 'right',
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (
      <div className="column-right">
        <Dropdown overlay={menu} placement="bottomRight">
          <Button icon="ellipsis-h" size="sm" />
        </Dropdown>
        <Button icon="eye" size="sm" />
        <Button icon="edit" size="sm" />
      </div>
    ),
  },
];

const data = [
  {
    id: '1',
    merchantid: 'ID123123122',
    status: 'Active',
    merchantname: 'Yahiro Ayuko',
    type: 'Perorangan',
    store: 'Open',
    city: 'Jakarta Selatan',
  },
  {
    id: '2',
    merchantid: 'ID123123371',
    status: 'Inactive',
    merchantname: 'Tatiana Gagelman',
    type: 'Perorangan',
    store: 'Open',
    city: 'Jakarta Utara',
  },
  {
    id: '3',
    merchantid: 'ID472123371',
    status: 'Unverified',
    merchantname: 'Sergio Pliego',
    type: 'Perusahaan',
    store: 'Close',
    city: 'Jakarta Timur',
  },
];

const meta = {
  page: 1,
  pageSize: 10,
  totalPages: 10,
  totalData: 9999,
};

export const Basic = (args: ITable) => {
  return (
    <Table
      {...args}
      columns={columns}
      data={data}
      meta={meta}
      style={{ width: 1560 }}
      rowSelection
    />
  );
};
