import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import logo from './logo.svg';

const theme = create({
  base: 'light',
  brandImage: logo,
  barSelectedColor: '#5034ff',
  brandTitle: 'Aronawa UI',
  background: {
    hoverable: 'rgba(80, 52, 255, 0.1)',
  },
  hoverable: 'rgba(80, 52, 255, 0.1)',
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
  BASE_FONT_FAMILY: 'Menlo, monospace',
});

addons.setConfig({
  theme,
});
