import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React, { PropsWithChildren } from 'react';
import { ThemeContextProvider } from '@/contexts';

export const renderWithProviders = (
	ui: React.ReactElement,
	{ ...renderOptions } = {}
) => {
	function Wrapper({
		children,
	}: PropsWithChildren<Record<string, unknown>>): JSX.Element {
		return (
			<ThemeContextProvider>
				<NavigationContainer>
					<React.Suspense fallback={'Loading Content...'}>
						{children}
					</React.Suspense>
				</NavigationContainer>
			</ThemeContextProvider>
		);
	}
	return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
