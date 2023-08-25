import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface RegisterScreenProps {}

const RegisterScreen = (props: RegisterScreenProps) => {
	return (
		<View style={styles.container}>
			<Text>RegisterScreen</Text>
		</View>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	container: {},
});
