import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from "react-redux";
import { store } from './store/store.ts';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <App />
      <Toaster />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
