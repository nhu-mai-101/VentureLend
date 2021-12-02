import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './ThemeContext.tsx'
import Header from './components/Header.tsx';
import LandingPage from './pages/Landing.tsx';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <LandingPage />
      </ThemeProvider>
    </div>
  )
}

export default App;
