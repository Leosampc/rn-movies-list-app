import React from 'react';
import * as Styled from './styled';

interface Props {
	text: string;
}

function EmptyState({ text }: Props): JSX.Element {
	return (
		<Styled.EmptyContainer>
			<Styled.EmptyText color="grayPrimary">{text}</Styled.EmptyText>
		</Styled.EmptyContainer>
	);
}

export default EmptyState;
