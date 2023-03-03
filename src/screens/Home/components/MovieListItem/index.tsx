import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { formatDate } from '@/utils';
import { IMovie } from '@/types';
import { RootStackScreenProps } from '@/navigation/types';
import { ImageWithLoading } from '@/components';
import * as Styled from './styled';

interface Props {
	data: IMovie;
}
function MovieListItem({ data }: Props): JSX.Element {
	const { height } = useWindowDimensions();
	const logoHeight = height * 0.18;
	const logoWidth = logoHeight * 0.67;

	const navigation =
		useNavigation<RootStackScreenProps<'Home'>['navigation']>();

	const handleNavigateToDetails = () =>
		navigation.navigate('MovieDetails', { id: data.id });

	return (
		<Styled.TouchableContainer
			activeOpacity={0.6}
			onPress={handleNavigateToDetails}
		>
			<ImageWithLoading
				width={logoWidth}
				height={logoHeight}
				radius={7}
				source={{ uri: `https://image.tmdb.org/t/p/w185/${data.posterPath}` }}
			/>
			<Styled.InfoContainer>
				<Styled.Title fontWeight="600">{data.title}</Styled.Title>
				<Styled.VoteContainer>
					<Styled.VoteText>
						<Styled.VoteIcon
							type="fontAwesome"
							name="star"
							size={16}
							color="yellowPrimary"
						/>
						{`${data.voteAverage}/10`}
					</Styled.VoteText>
					<Styled.VoteText>{`votes: ${data.voteCount}`}</Styled.VoteText>
				</Styled.VoteContainer>
				<Styled.ReleaseDate fontWeight="600">
					{formatDate(data.releaseDate)}
				</Styled.ReleaseDate>
			</Styled.InfoContainer>
		</Styled.TouchableContainer>
	);
}

export default MovieListItem;
