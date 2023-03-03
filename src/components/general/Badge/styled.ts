import styled from 'styled-components/native';
import { IColors } from '@/types';

interface IContainer {
	color: keyof IColors;
}
export const Container = styled.View<IContainer>`
	align-self: flex-start;
	align-items: center;
	justify-content: center;
	padding: 6px 12px;
	border-radius: 16px;
	background-color: ${({ theme, color }) =>
		theme.colors[color] ?? 'transparent'};
`;
