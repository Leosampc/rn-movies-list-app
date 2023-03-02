import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from '@/theme';

interface Props {
	children: React.ReactNode;
}

const ThemeContextProvider = ({ children }: Props): JSX.Element => {
	return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

export default ThemeContextProvider;
