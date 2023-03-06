import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Text, VectorIcon } from '@/components';

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

export const Title = styled(Text)`
	font-size: 22px;
`;

export const SubTitle = styled(Text)`
	font-size: 18px;
	margin: 12px 0px;
	color: ${({ theme }) => theme.colors.secondary};
`;

export const Row = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	margin: 10px 0px;
	gap: 10px;
`;

export const Separator = styled.View`
	width: 8px;
`;

export const VoteText = styled(Text)`
	font-size: 16px;
	color: ${({ theme }) => theme.colors.grayPrimary};
`;

export const VoteIcon = styled(VectorIcon).attrs(() => ({
	containerStyle: { marginRight: 10 },
}))``;

export const Overview = styled(Text)`
	font-size: 14px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.grayPrimary};
`;
