import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import LoginScreen from '../../screens/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import ServiceSelectorScreen from '../../screens/ServiceSelectorScreen';

const Stack = createNativeStackNavigator();

interface StackNavigatorsProps {}

const StackNavigators = (props: StackNavigatorsProps) => {
	const globalScreenOptions = {
		headerStyle: {
			backgroundColor: '#2C6BED',
		},
		headerTitleStyle: { color: 'white' },
		headerTintColor: 'white',
	};
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='ServiceSelector'
				screenOptions={globalScreenOptions}
			>
				<Stack.Screen
					options={{
						animation: 'slide_from_right',
						animationDuration: 100,
					}}
					name='Login'
					component={LoginScreen}
				/>
				<Stack.Screen
					options={{
						animation: 'slide_from_right',
						animationDuration: 100,
					}}
					name='Register'
					component={RegisterScreen}
				/>
				<Stack.Screen
					options={{
						animation: 'slide_from_right',
						animationDuration: 100,
						headerShadowVisible: false,
					}}
					name='ServiceSelector'
					component={ServiceSelectorScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default StackNavigators;

const styles = StyleSheet.create({
	container: {},
});
