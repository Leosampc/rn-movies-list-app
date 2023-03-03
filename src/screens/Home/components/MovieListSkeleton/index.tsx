import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Skeleton } from '@/components';
import * as Styled from './styled';

function MovieListSkeleton(): JSX.Element {
	const { height, width } = useWindowDimensions();
	const logoHeight = height * 0.18;
	const logoWidth = logoHeight * 0.67;
	return (
		<Styled.Container>
			{[...new Array(2)].map((_, index) => (
				<Styled.SkeletonContainer key={`key-${index}`}>
					<Skeleton width={logoWidth} height={logoHeight} radius={7} />
					<Styled.InfoContainer>
						<Skeleton width={width * 0.5} height={16} radius={7} />
						<Styled.VoteContainer>
							<Skeleton width={50} height={12} radius={7} />
							<Skeleton width={50} height={12} radius={7} />
						</Styled.VoteContainer>
						<Skeleton width={width * 0.3} height={14} radius={7} />
					</Styled.InfoContainer>
				</Styled.SkeletonContainer>
			))}
		</Styled.Container>
	);
}

export default MovieListSkeleton;
