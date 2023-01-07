import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { CssBaseline } from '@mui/material';
import MainContent from './components/generic_ui/MainContent';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainContent />
    </ThemeProvider>
  );
}

export default App;
