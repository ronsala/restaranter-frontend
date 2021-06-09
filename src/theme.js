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
  typography: {
    fontsize: 16
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

theme = responsiveFontSizes(theme, 100);

export default theme;