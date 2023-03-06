import React from 'react';
import { IColors } from '@/types';
import { Text } from '@/components';
import * as Styled from './styled';

interface Props {
	title?: string;
	color: keyof IColors;
	textColor?: keyof IColors;
}
function StatusIndicator({ title, color, textColor }: Props): JSX.Element {
	return (
		<Styled.Container testID="badge" color={color}>
			<Text color={textColor ?? 'white'} fontWeight="600">
				{title}
			</Text>
		</Styled.Container>
	);
}

export default StatusIndicator;
