import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Box, CssBaseline } from '@mui/material';
import MainContent from './components/generic_ui/MainContent';
import AppBarMenu, { DrawerHeader } from './components/generic_ui/AppBarMenu';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import WSStateUpdater from './components/WSStateUpdater';

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <WSStateUpdater/>
        <BrowserRouter>
          <Box sx={{ display: 'flex', height: '100vh' }}>
            <CssBaseline />
            <AppBarMenu />
            <Box component="main" sx={{ flexGrow: 1, p: 1, height: '100%' }}>
              <DrawerHeader />
              <MainContent />
            </Box>
          </Box>
        </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
