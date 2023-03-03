import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { moviesAPI } from '@/services';
import { toHoursAndMinutes, formatDate } from '@/utils';
import { GenreType, IMovie } from '@/types';
import { RootStackParamList } from '@/navigation/types';
import { ImageWithLoading, Badge } from '@/components';
import { Info } from './components';
import * as Styled from './styled';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

function MovieDetails({ route }: Props): JSX.Element {
	const { id } = route.params;
	const { width } = useWindowDimensions();

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

	useEffect(() => {
		handleFetchMovieDetails();
	}, [handleFetchMovieDetails]);

	if (!movie) return <Styled.Screen></Styled.Screen>;

	return (
		<Styled.Screen>
			<StatusBar barStyle="light-content" />
			<ImageWithLoading
				width={width}
				height={width * 0.56}
				source={{
					uri: `https://image.tmdb.org/t/p/w500/${movie.backdropPath}`,
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
