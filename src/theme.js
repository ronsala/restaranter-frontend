import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff0000'
    },
    secondary: {
      main: '#000'
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#F0E68C',
    },
  },
  spacing: 4,
  margin: 1,
});

theme = responsiveFontSizes(theme);

theme.typography.subtitle2 = {
  fontSize: '0.1rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

export default theme;