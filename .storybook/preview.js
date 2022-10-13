import { DocsContainer } from '@storybook/addon-docs';
import { Box } from '../src/components/atoms/Box';
import { ColorDoc, ColorDocWrapper } from '../src/documentation/Color/Color';
import { IconDoc, IconDocs, IconDocWrapper } from '../src/documentation/Icon/Icon';
import { Theme } from '../src/helpers/Theme';

export const parameters = {
  controls: { expanded: true },
  options: {
    panelPosition: 'bottom',
    showSearchBox: true,
    storySort: {
      method: 'alphabetical',
      order: ['Foundations', 'Atoms', 'Molecules'],
    },
  },
  docs: {
    components: {
      Box,
      IconDoc,
      IconDocs,
      IconDocWrapper,
      ColorDocWrapper,
      ColorDoc,
    },
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <Theme>{children}</Theme>
      </DocsContainer>
    ),
  },
};

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];
