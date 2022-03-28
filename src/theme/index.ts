import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import Foundations from './Foundations';
import Typography from './Typography';
import Styles from './Styles/Global';
import Button from './Components/Button';

const Config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const AronawaUI = extendTheme({
  Config,
  components: {
    Button,
  },
  ...Foundations,
  ...Typography,
  ...Styles,
});

export default AronawaUI;
