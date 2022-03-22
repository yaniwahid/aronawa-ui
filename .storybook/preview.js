import { DocsContainer } from '@storybook/addon-docs';
import { ThemeProvider } from '../src/index';
import {
  ColorPalette,
  ColorPalettes,
  ColorWrapper,
} from '../src/documentation/Colors/Colors';
import {
  ComponentName,
  SectionName,
  Title,
  Paragraph,
} from '../src/documentation/Text';
import {
  IconDoc,
  IconDocs,
  IconDocWrapper,
} from '../src/documentation/Icon/Icon';
import { Typography } from '../src/documentation/Typography/Typography';
import {
  Code,
  Grid,
  Box,
  Text,
  HStack,
  VStack,
  StackDivider,
  Heading,
  Alert,Flex,
} from '@chakra-ui/react';

export const parameters = {
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Overview',
        ['Introduction', 'Get Started'],
        'Foundations',
        'Components',
      ],
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    components: {
      h1: ComponentName,
      h2: SectionName,
      h3: Title,
      p: Paragraph,
      ColorPalette,
      ColorPalettes,
      ColorWrapper,
      Code,
      Grid,
      Box,
      Text,
      HStack,
      VStack,
      StackDivider,
      Heading,
      Alert,
      Typography,
      IconDoc,
      IconDocs,
      IconDocWrapper,
      Flex,
    },
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <ThemeProvider>{children}</ThemeProvider>
      </DocsContainer>
    ),
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
