import styled from 'styled-components/native';
import { Text } from '@/components';

export const Container = styled.View``;

export const Title = styled(Text)`
	font-size: 14px;
	color: ${({ theme }) => theme.colors.grayPrimary};
`;

export const Description = styled(Text)`
	margin-top: 3px;
	font-size: 14px;
	min-width: 90px;
	color: ${({ theme }) => theme.colors.black};
`;
