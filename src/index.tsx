import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './config/theme';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
    <BrowserRouter>
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<App />
		</ThemeProvider>
    </BrowserRouter>
	</React.StrictMode>
);
