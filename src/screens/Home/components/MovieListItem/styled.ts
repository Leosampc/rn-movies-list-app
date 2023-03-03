import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Text, VectorIcon } from '@/components';

const { width } = Dimensions.get('window');

export const TouchableContainer = styled.TouchableOpacity`
	flex-direction: row;
	width: ${width * 0.9}px;
`;

export const InfoContainer = styled.View`
	flex: 1;
	justify-content: space-around;
	padding: 5px 0px;
	padding-left: 15px;
`;

export const Title = styled(Text)`
	font-size: 18px;
	width: 70%;
`;

export const ReleaseDate = styled(Text)`
	color: ${({ theme }) => theme.colors.black};
	font-size: 14px;
`;

export const VoteContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const VoteText = styled(Text)`
	color: ${({ theme }) => theme.colors.grayPrimary};
	font-size: 15px;
`;

export const VoteIcon = styled(VectorIcon).attrs(() => ({
	containerStyle: { marginRight: 10 },
}))``;
