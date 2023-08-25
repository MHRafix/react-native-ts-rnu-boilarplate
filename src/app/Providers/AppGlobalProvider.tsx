import * as React from 'react';
import { StyleSheet } from 'react-native';
import NativeElementsThemeProvider from './NativeElementsThemeProvider';

interface AppGlobalProvidersProps {
	children: JSX.Element;
}

const AppGlobalProviders = ({ children }: AppGlobalProvidersProps) => {
	return <NativeElementsThemeProvider>{children}</NativeElementsThemeProvider>;
};
export default AppGlobalProviders;

const styles = StyleSheet.create({
	container: {},
});
