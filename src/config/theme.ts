import { createTheme } from '@mui/material/styles';
import { common } from '@mui/material/colors';


const light = {
	palette: {
		type: 'light',
		background: {
			default: '#f4f6f8',
			paper: common.white,
		},
		primary: {
			contrastText: '#ffffff',
			main: '#1976d2',
		},
		secondary: {
			main: '#c40909',
		},
		text: {
			primary: '#172b4d',
			secondary: '#6b778c',
			dark: common.black,
		},
	},
	components: {
		MuiContainer: {
			styleOverrides: {
				root: {
					height: '100%',
			
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				html: { height: '100%' },
				body: { background: '#f4f6f8', height: '100%', minHeight: '100%' },
			},
		},
	},
	// shadow,
	// typography,
};

// A custom theme for this app
let theme = createTheme(light);
theme = createTheme(theme, {
	components: {
		MuiContainer: {
			styleOverrides: {
				maxWidthLg: {
					[theme.breakpoints.up('lg')]: {
						maxWidth: '1320px',
					},
				},
			},
		},
	},
});
export default theme;
