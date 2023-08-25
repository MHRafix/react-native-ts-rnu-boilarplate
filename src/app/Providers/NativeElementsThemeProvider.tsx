import { ThemeProvider, createTheme } from '@rneui/themed';
import * as React from 'react';

interface NativeElementsProviderProps {
	children: JSX.Element;
}

export interface Theme {
	colors: Colors;
	mode: 'light' | 'dark';
	spacing: {
		xs: number;
		sm: number;
		md: number;
		lg: number;
		xl: number;
	};
}

const NativeElementsThemeProvider = ({
	children,
}: NativeElementsProviderProps) => {
	const theme = createTheme({
		lightColors: {
			primary: '#fe724c',
			black: '#1a1d26',
			grey0: '#FDFDFD',
			grey1: '#F6F6F6',
			grey2: '#F3F3F3',
			grey3: '#CCCFDA',
			warning: '#FFC529',
		},
		darkColors: {
			primary: 'blue',
		},
		components: {
			Button: {
				raised: true,
			},
		},
	});
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default NativeElementsThemeProvider;

interface Colors {
	primary: string;
	secondary: string;
	background: string;
	white: string;
	black: string;
	grey: string;
	greyOutline: string;
	searchBg: string;
	success: string;
	warning: string;
	error: string;
	disabled: string;
	divider: string;
	// platform: {
	//   ios: PlatformColors;
	//   android: PlatformColors;
	//   web: PlatformColors;
	//   default: PlatformColors;
	// };
}
