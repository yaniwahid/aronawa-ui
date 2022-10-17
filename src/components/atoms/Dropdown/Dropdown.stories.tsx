import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Color from '../../../themes/Color';
import Button from '../Button';
import Dropdown, { DropdownItem, DropdownMenu } from './Dropdown';
import { IDropdown } from './Dropdown.types';

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

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

export const Basic = (args: IDropdown) => (
  <Dropdown overlay={menu} {...args}>
    <Button color="primary">Click Me</Button>
  </Dropdown>
);
