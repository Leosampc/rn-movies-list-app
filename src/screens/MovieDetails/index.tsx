import React, { useState, useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';
import { moviesAPI } from '@/services';
import { IMovie } from '@/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'MovieDetails'>;

function MovieDetails({ route }: Props): JSX.Element {
	const { id } = route.params;
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

	useEffect(() => {
		handleFetchMovieDetails();
	}, [handleFetchMovieDetails]);
	return <View>{!!movie && <Text>{JSON.stringify(movie)}</Text>}</View>;
}

export default MovieDetails;
