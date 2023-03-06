import React from 'react';
import { useWindowDimensions } from 'react-native';
import { Skeleton } from '@/components';
import * as Styled from './styled';

function MovieSkeleton(): JSX.Element {
	const { width } = useWindowDimensions();
	const imageHeight = width * 0.56;

	return (
		<Styled.Screen>
			<Skeleton width={width} height={imageHeight} />
			<Styled.Body>
				<Skeleton width={width * 0.5} height={22} radius={12} />
				<Styled.Row>
					<Skeleton width={width * 0.2} height={18} radius={12} />
				</Styled.Row>
				<Styled.Row>
					<Skeleton width={width * 0.25} height={26} radius={14} />
					<Skeleton width={width * 0.25} height={26} radius={14} />
				</Styled.Row>
				<Styled.Row>
					<Skeleton width={width * 0.4} height={18} radius={12} />
				</Styled.Row>
				<Styled.Row>
					<Skeleton width={width * 0.7} height={14} radius={12} />
					<Skeleton width={width * 0.7} height={14} radius={12} />
					<Skeleton width={width * 0.7} height={14} radius={12} />
					<Skeleton width={width * 0.3} height={14} radius={12} />
				</Styled.Row>
			</Styled.Body>
		</Styled.Screen>
	);
}

export default MovieSkeleton;
