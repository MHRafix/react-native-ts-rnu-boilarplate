import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import AppGlobalProviders from './src/app/Providers/AppGlobalProvider';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import StackNavigators from './src/app/Navigators/StackNavigatorControll';

export default function App() {
	return (
		<AppGlobalProviders>
			<StackNavigators />
		</AppGlobalProviders>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: 'teal',
		fontSize: 30,
		fontWeight: '700',
	},
	tagline: {
		color: 'red',
		fontSize: 16,
		fontWeight: '500',
	},
});
