import { createTheme, Theme } from '@mui/material/styles';
import { colors } from './colors';

export const theme: Theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: colors.Accent
		},
		background: {
			default: colors.Background,
			paper: colors.Background
		},
		text: {
			primary: colors.White
		}
	}
});
