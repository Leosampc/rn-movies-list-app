import * as React from 'react';
import { useTheme } from 'styled-components/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { Home, MovieDetails } from '@/screens';

const Root = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	const theme = useTheme();
	return (
		<Root.Navigator>
			<Root.Screen
				name="Home"
				component={Home}
				options={{
					headerLargeTitle: true,
					title: 'Upcoming Movies',
					headerTintColor: theme.colors.secondary,
				}}
			/>
			<Root.Screen
				name="MovieDetails"
				component={MovieDetails}
				options={{
					title: '',
					headerTransparent: true,
					headerTintColor: theme.colors.white,
				}}
			/>
		</Root.Navigator>
	);
}

export default RootNavigator;
