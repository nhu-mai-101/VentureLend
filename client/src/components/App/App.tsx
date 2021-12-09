import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../contexts/ThemeContext'
import Header from './Header';
import { AuthProvider } from '../../contexts/AuthContext';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default App;
