import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContextProvider } from './contexts';
import RootNavigator from './navigation';

function App(): JSX.Element {
	return (
		<ThemeContextProvider>
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</ThemeContextProvider>
	);
}

export default App;
