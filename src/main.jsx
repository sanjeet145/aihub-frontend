import { createRoot } from 'react-dom/client'
import './App.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        </ThemeProvider>
    </AuthProvider>
)

