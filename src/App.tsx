import { CssBaseline } from '@mui/material'
import HeroSection from './HeroSection'
import './App.css'
import { ThemeUIProvider } from 'theme-ui';
import { createTheme as materialCreateTheme, THEME_ID, ThemeOptions } from '@mui/material/styles';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2a2550',
    },
    secondary: {
      main: '#1e3c72',
    },
  },
};

const themeUITheme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
};

const materialTheme = materialCreateTheme(themeOptions);

function App() {
  return (
    <ThemeUIProvider theme={themeUITheme}>
      <MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
        <CssBaseline />
        <HeroSection />
      </MaterialThemeProvider>
    </ThemeUIProvider>
  )
}

export default App