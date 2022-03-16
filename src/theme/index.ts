import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { colors } from './Colors';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const AronawaUI = extendTheme({
  config,
  colors,
  fonts: {
    body: '"Lexend", sans-serif',
    heading: '"Lexend", sans-serif',
  },
  styles: {
    global: {
      body: {
        color: 'font.ink',
        fontSize: '14px',
      },
    },
  },
});

export default AronawaUI;
