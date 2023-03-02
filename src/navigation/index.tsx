import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { Home, MovieDetails } from '@/screens';

const Root = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Root.Navigator>
			<Root.Screen name="Home" component={Home} />
			<Root.Screen name="MovieDetails" component={MovieDetails} />
		</Root.Navigator>
	);
}

export default RootNavigator;
