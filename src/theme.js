import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#ffff00',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  spacing: 4,
  margin: 10,
});

export default theme;