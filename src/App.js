import React, { useState, useRef } from 'react';
import { appTitle, appName, network } from './settings.js';
import HeaderBar from './components/HeaderBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { DAppProvider, useConnect } from './dapp.js';
import SnackMsg from './components/SnackMsg';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <DAppProvider appName={appName}>
      <React.Suspense fallback={null}>
        <PageRouter />
      </React.Suspense>
    </DAppProvider>
  );
}

function PageRouter (props) {
  const [viewSnack, setViewSnack] = React.useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          secondary: {
            light: '#f5c58a',
            main: '#ed9222',
            dark: '#ca7c1b',
            contrastText: '#fff',
          }
        },
      }),
    [prefersDarkMode],
  );
  const handleConnect = () => {}
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <HeaderBar appTitle={appTitle} handleConnect={handleConnect} theme={theme}/>
      <Footer />
      <SnackMsg open={viewSnack} theme={theme} />
    </ThemeProvider>
  )
}

export default App;
