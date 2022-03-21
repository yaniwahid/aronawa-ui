import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import foundations from './Foundations';
import typography from './Typography';
import styles from './Styles/Global';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const AronawaUI = extendTheme({
  config,
  ...foundations,
  ...typography,
  ...styles,
});

export default AronawaUI;
