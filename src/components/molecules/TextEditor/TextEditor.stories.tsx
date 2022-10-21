import { ComponentMeta } from '@storybook/react';
import React from 'react';
import TextEditor from './TextEditor';
import { ITextEditor } from './TextEditor.types';

export default {
  title: 'Molecules/Text Editor',
  component: TextEditor,
} as ComponentMeta<typeof TextEditor>;

export const Basic = (args: ITextEditor) => <TextEditor {...args} />;
