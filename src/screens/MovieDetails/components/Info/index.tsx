import React from 'react';
import * as Styled from './styled';

interface Props {
	title: string;
	description?: string;
}
function Info({ title, description }: Props): JSX.Element {
	return (
		<Styled.Container>
			<Styled.Title>{title}</Styled.Title>
			<Styled.Description>{description}</Styled.Description>
		</Styled.Container>
	);
}

export default Info;
