import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.

const main = '#0e1111';
const secondary = '#04f7f7';
const theme = createTheme({
  palette: {
    primary: {
      main: main,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FEFEFE',
    },
  },
});

export default theme;
