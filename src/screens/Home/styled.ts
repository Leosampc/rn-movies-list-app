import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '@/components';

export const styles = StyleSheet.create({
	list: {
		alignSelf: 'center',
		paddingBottom: 20,
		paddingTop: Platform.OS === 'ios' ? 160 : 10,
	},
});

export const Screen = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.white};
`;

export const SeparatorComponent = styled.View`
	margin-top: 18px;
	margin-bottom: 18px;
	height: 1px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.graySecondary};
`;

export const ListFooter = styled.View`
	margin-top: 10px;
	margin-bottom: 5px;
`;

export const EmptyContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding-top: 40px;
`;

export const EmptyText = styled(Text)`
	text-align: center;
`;
