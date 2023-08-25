import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Avatar, Text } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';

interface ChatScreenProps {
	navigation: any;
	route: any;
}

const ServiceSelectorScreen = ({ navigation, route }: ChatScreenProps) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: route?.params?.chat?.chatName,
			// headerBackTitleVisible: true,
			// headerBackTitle: 'true',
			headerStyle: {
				backgroundColor: '#fff',
			},
			headerTitleStyle: {
				fontSize: 17,
				color: 'black',
			},
			headerLeft: () => (
				<View
					style={{
						marginRight: 15,
					}}
				>
					<Avatar
						rounded
						size={'small'}
						containerStyle={{ backgroundColor: 'teal' }}
						source={{ uri: route?.params?.chat?.photoURL }}
					/>
				</View>
			),

			headerRight: () => (
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-end',
						gap: 15,
						width: 180,
					}}
				>
					<TouchableOpacity activeOpacity={0.5}>
						<Ionicons name='videocam' size={24} color='black' />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate('AddChat')}
						activeOpacity={0.5}
					>
						<MaterialIcons name='call' size={24} color='black' />
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.5}>
						<Entypo name='dots-three-vertical' size={24} color='black' />
					</TouchableOpacity>
				</View>
			),
		});
	}, [navigation]);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
			<StatusBar style='dark' />
			<Text>Hello</Text>
		</SafeAreaView>
	);
};

export default ServiceSelectorScreen;

const styles = StyleSheet.create({
	container: { flex: 1 },
	footer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		padding: 15,
	},
	textInput: {
		bottom: 0,
		height: 40,
		flex: 1,
		marginRight: 15,
		borderColor: 'transparent',
		backgroundColor: '#ECECEC',
		borderWidth: 1,
		padding: 10,
		color: 'grey',
		borderRadius: 30,
	},

	receiver: {
		padding: 15,
		backgroundColor: '#ECECEC',
		alignSelf: 'flex-end',
		borderRadius: 20,
		marginRight: 15,
		marginBottom: 20,
		maxWidth: '80%',
		position: 'relative',
	},
	sender: {
		padding: 15,
		backgroundColor: '#2B68E6',
		alignSelf: 'flex-start',
		borderRadius: 20,
		marginRight: 15,
		marginBottom: 20,
		maxWidth: '80%',
		position: 'relative',
	},
	receiverText: {},
	senderText: {
		color: '#FFFFFF',
	},
});
