import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { moviesAPI } from '@/services';
import { RootStackParamList } from '@/navigation/types';
import { IMovie } from '@/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

function Home({ navigation }: Props): JSX.Element {
	const [upComingMovies, setUpComingMovies] = useState<IMovie[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleFetchUpComingMovies = useCallback(async () => {
		setIsLoading(true);
		try {
			const response = await moviesAPI.getUpcoming(currentPage);
			setUpComingMovies(response);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [currentPage]);

	const handleNavigateToDetails = (movieId: number) =>
		navigation.navigate('MovieDetails', { id: movieId });

	useEffect(() => {
		handleFetchUpComingMovies();
	}, [handleFetchUpComingMovies]);
	return (
		<View>
			{upComingMovies.map((movie) => (
				<TouchableOpacity
					key={movie.id}
					onPress={() => handleNavigateToDetails(movie.id)}
				>
					<Text>{movie.title}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}

export default Home;
