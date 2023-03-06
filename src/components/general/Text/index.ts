import { TextProps } from 'react-native/types';
import styled from 'styled-components/native';
import { IColors } from '@/types';

interface Props extends TextProps {
	color?: keyof IColors;
	fontWeight?:
		| 'normal'
		| 'bold'
		| '100'
		| '200'
		| '300'
		| '400'
		| '500'
		| '600'
		| '700'
		| '800'
		| '900'
		| undefined;
}

export default styled.Text.attrs(() => ({
	testID: 'text',
}))<Props>`
	color: ${({ theme, color }) =>
		color ? theme.colors[color] : theme.colors.black};
	font-weight: ${({ fontWeight }) => fontWeight ?? 'normal'};
`;
