import React, { useState, useRef } from 'react';
import { appTitle, appName, network } from './settings.js';
import HeaderBar from './components/HeaderBar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
/* import useMediaQuery from '@material-ui/core/useMediaQuery';
 */import { DAppProvider, useConnect } from './dapp.js';
import SnackMsg from './components/SnackMsg';
import './App.css';
import Footer from './components/Footer';
import Container from '@material-ui/core/Container';
import Product from './components/Product';
import Escrow from './components/Escrow';
import { EscrowStateProvider } from './components/EscrowState.js';
import Delivery from './components/Delivery.js';

function App() {
  return (
    <DAppProvider appName={appName}>
      <EscrowStateProvider>
        <React.Suspense fallback={null}>
          <PageRouter />
        </React.Suspense>
      </EscrowStateProvider>
    </DAppProvider>
  );
}

function PageRouter (props) {
  const [viewSnack, setViewSnack] = React.useState(false);
  const prefersDarkMode = false; /* useMediaQuery('(prefers-color-scheme: dark)'); */
  var connect = useConnect();
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiStepIcon: {
           root: {
             '&$completed': {
               color: '#ca7c1b',
             },
             '&$active': {
               color: '#ed9222',
             },
           },
           active: {},
           completed: {},
         }
        },
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
  const handleConnect = React.useCallback(async () => {
    try {
      await connect(network);
    } catch (err) {
      alert(err.message);
    };
  }, [connect]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <HeaderBar appTitle={appTitle} handleConnect={handleConnect} theme={theme}/>
      <Container  maxWidth="md">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Product />
          </Grid>
          <Grid item style={{ width: '100%' }}>
            <Escrow />
          </Grid>
        </Grid>
      </Container>
      <Footer appName={appName}/>
      <SnackMsg open={viewSnack} theme={theme} />
      <Delivery open={true}></Delivery>
    </ThemeProvider>
  )
}

export default App;
