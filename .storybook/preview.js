import { DocsContainer } from '@storybook/addon-docs';
import { Theme } from '../src/helpers/Theme';

const sameKindComparator = (a, b) => {
  console.log(a[1].kind, b[1].kind);
  console.log(a);
  const forceOnTop = 'Basic';

  // force anything with "Basic" in the name to be on top
  if (a[1].name.includes(forceOnTop)) {
    return -1;
  }

  // force anything with "Basic" in the name to be on top
  if (b[1].name.includes(forceOnTop)) {
    return 1;
  }

  // sort by name ascending otherwise
  return a[1].name.localeCompare(b[1].name, undefined, { numeric: true });
};

export const parameters = {
  controls: { expanded: true },
  options: {
    panelPosition: 'bottom',
    showSearchBox: true,
    storySort: (a, b) =>
      a[1].kind === b[1].kind // kind === story parent name
        ? sameKindComparator(a, b)
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }), // id = automatically generated id from storybook, slugify(parentName+childName)
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
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
