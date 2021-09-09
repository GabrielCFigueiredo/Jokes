
import { createTheme, responsiveFontSizes } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react'
import Router from './Routes/Router';

let theme = createTheme({
    palette: {
        secondary: {
          main: '#f44336',
        },
      },
});
theme = responsiveFontSizes(theme);


function App() {
    return(
        <ThemeProvider theme={theme}>
            <Router/>
        </ThemeProvider>
    )
}
export default App;