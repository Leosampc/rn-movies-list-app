import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
	padding-top: ${Platform.OS === 'ios' ? 160 : 10}px;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const SkeletonContainer = styled.View`
	flex-direction: row;
	width: ${width * 0.9}px;
	margin-bottom: 32px;
`;

export const InfoContainer = styled.View`
	flex: 1;
	justify-content: space-around;
	padding: 5px 0px;
	padding-left: 15px;
`;

export const VoteContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;
