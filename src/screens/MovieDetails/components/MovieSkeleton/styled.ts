import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Screen = styled.ScrollView`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white};
`;

const padding = (width - width * 0.9) / 2;
export const Body = styled.View`
	flex: 1;
	padding: ${padding}px;
	padding-top: ${padding + 10}px;
	margin-top: -15px;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const Row = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	margin: 10px 0px;
	gap: 10px;
`;
