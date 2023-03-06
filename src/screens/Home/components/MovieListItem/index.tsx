import React from 'react';
import { useWindowDimensions } from 'react-native';
import { API_IMAGE_URL } from 'react-native-dotenv';
import { useNavigation } from '@react-navigation/native';
import { formatDate } from '@/utils';
import { IMovie } from '@/types';
import { RootStackScreenProps } from '@/navigation/types';
import { ImageWithLoading } from '@/components';
import * as Styled from './styled';

interface Props {
	data: IMovie;
}

const apiImageSize = 'w185';

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
			testID="movie-list-item"
			activeOpacity={0.6}
			onPress={handleNavigateToDetails}
		>
			<ImageWithLoading
				width={logoWidth}
				height={logoHeight}
				radius={7}
				source={{ uri: `${API_IMAGE_URL}/${apiImageSize}/${data.posterPath}` }}
			/>
			<Styled.InfoContainer>
				<Styled.Title fontWeight="600">{data.title}</Styled.Title>
				<Styled.VoteContainer>
					<Styled.VoteContainer>
						<Styled.VoteIcon
							type="fontAwesome"
							name="star"
							size={16}
							color="yellowPrimary"
						/>
						<Styled.VoteText>{`${data.voteAverage}/10`}</Styled.VoteText>
					</Styled.VoteContainer>
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
