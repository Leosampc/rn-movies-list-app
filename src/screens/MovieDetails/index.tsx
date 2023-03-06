import React, { useState, useEffect, useCallback } from 'react';
import { RefreshControl, StatusBar, useWindowDimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { API_IMAGE_URL } from 'react-native-dotenv';
import { moviesAPI } from '@/services';
import { Images } from '@/constants';
import { toHoursAndMinutes, formatDate } from '@/utils';
import { GenreType, IMovie } from '@/types';
import { RootStackParamList } from '@/navigation/types';
import { Badge, ImageWithLoading } from '@/components';
import { Info, MovieSkeleton } from './components';
import * as Styled from './styled';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

const apiImageSize = 'w500';

function MovieDetails({ route }: Props): JSX.Element {
	const { id } = route.params;
	const { width } = useWindowDimensions();
	const imageHeight = width * 0.56;

	const [movie, setMovie] = useState<IMovie>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleFetchMovieDetails = useCallback(async () => {
		setIsLoading(true);
		try {
			const response = await moviesAPI.getDetails(id);
			setMovie(response);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [id]);

	const renderGenres = (genres: GenreType[]) => (
		<Styled.Row>
			{genres.map((genre) => (
				<Badge key={genre.id} title={genre.name} color="yellowPrimary" />
			))}
		</Styled.Row>
	);

	const refreshControl = useCallback(
		() => (
			<RefreshControl
				refreshing={isLoading}
				onRefresh={handleFetchMovieDetails}
			/>
		),
		[isLoading, handleFetchMovieDetails]
	);

	useEffect(() => {
		handleFetchMovieDetails();
	}, [handleFetchMovieDetails]);

	if (isLoading && !movie) return <MovieSkeleton />;

	if (!movie)
		return (
			<Styled.Screen refreshControl={refreshControl()}>
				<ImageWithLoading
					width={width}
					height={imageHeight}
					source={Images.imageNotFound}
				/>
				<Styled.Body>
					<Styled.Overview fontWeight="600">
						{'Sorry, something went wrong, try again later.'}
					</Styled.Overview>
				</Styled.Body>
			</Styled.Screen>
		);

	return (
		<Styled.Screen refreshControl={refreshControl()}>
			<StatusBar barStyle="light-content" />
			<ImageWithLoading
				width={width}
				height={imageHeight}
				source={{
					uri: `${API_IMAGE_URL}/${apiImageSize}/${movie.backdropPath}`,
				}}
			/>
			<Styled.Body>
				<Styled.Title fontWeight="600">{movie.title}</Styled.Title>
				<Styled.Row>
					<Styled.VoteIcon
						type="fontAwesome"
						name="star"
						size={18}
						color="yellowPrimary"
					/>
					<Styled.VoteText>{`${movie.voteAverage.toFixed(
						1
					)}/10`}</Styled.VoteText>
				</Styled.Row>
				{movie.genres && renderGenres(movie.genres)}
				<Styled.Row>
					<Info
						title="Length"
						description={toHoursAndMinutes(movie.length ?? 0)}
					/>
					<Info title="Status" description={movie.status} />
					<Info
						title="Release Date"
						description={formatDate(movie.releaseDate)}
					/>
				</Styled.Row>
				<Styled.SubTitle fontWeight="700" color="secondary">
					Description
				</Styled.SubTitle>
				<Styled.Overview>{movie.overview}</Styled.Overview>
			</Styled.Body>
		</Styled.Screen>
	);
}

export default MovieDetails;
