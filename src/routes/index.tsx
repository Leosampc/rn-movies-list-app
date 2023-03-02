import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@/screens';

const Root = createNativeStackNavigator();

function RootNavigator() {
	return (
		<Root.Navigator>
			<Root.Screen name="Home" component={Home} />
		</Root.Navigator>
	);
}

export default RootNavigator;
