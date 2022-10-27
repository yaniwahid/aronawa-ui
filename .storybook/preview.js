import { DocsContainer } from '@storybook/addon-docs';
import { ColorDoc, ColorDocWrapper } from '../src/documentation/Color/Color';
import { IconDoc, IconDocs, IconDocWrapper } from '../src/documentation/Icon/Icon';
import { RadiusDoc, RadiusDocWrapper } from '../src/documentation/Radius/Radius';
import { ShadowDoc, ShadowDocWrapper } from '../src/documentation/Shadow/Shadow';
import { ComponentName, SectionName } from '../src/documentation/Text';
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
      h1: ComponentName,
      h2: SectionName,
      IconDoc,
      IconDocs,
      IconDocWrapper,
      ColorDocWrapper,
      ColorDoc,
      ShadowDocWrapper,
      ShadowDoc,
      RadiusDocWrapper,
      RadiusDoc,
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
