import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, ListRenderItem, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';
import { moviesAPI } from '@/services';
import { IMovie } from '@/types';
import { MovieListItem, MovieListSkeleton } from './components';
import * as Styled from './styled';

function Home(): JSX.Element {
	const theme = useTheme();
	const [upComingMovies, setUpComingMovies] = useState<IMovie[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleFetchUpComingMovies = useCallback(async (page: number) => {
		setIsLoading(true);
		try {
			const response = await moviesAPI.getUpcoming(page);
			setUpComingMovies((prevState) => {
				return page > 1 ? [...prevState, ...response] : response;
			});
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const onEndReached = useCallback(() => {
		if (!isLoading) setCurrentPage((prevState) => prevState + 1);
	}, [isLoading]);

	const onRefresh = () => setCurrentPage(1);

	const renderListItem: ListRenderItem<IMovie> = useCallback(
		({ item }) => <MovieListItem data={item} />,
		[]
	);

	const renderListFooter = () => {
		if (isLoading) return null;
		return (
			<Styled.ListFooter>
				<ActivityIndicator size="large" color={theme.colors.secondary} />
			</Styled.ListFooter>
		);
	};

	useEffect(() => {
		handleFetchUpComingMovies(currentPage);
	}, [currentPage, handleFetchUpComingMovies]);

	if (isLoading && upComingMovies.length === 0) return <MovieListSkeleton />;

	return (
		<Styled.Screen>
			<FlatList<IMovie>
				contentContainerStyle={Styled.styles.list}
				showsVerticalScrollIndicator={false}
				data={upComingMovies}
				renderItem={renderListItem}
				keyExtractor={(item) => item.id.toString()}
				ItemSeparatorComponent={Styled.SeparatorComponent}
				ListFooterComponent={renderListFooter}
				onEndReached={onEndReached}
				onEndReachedThreshold={0.1}
				onRefresh={onRefresh}
				refreshing={isLoading}
			/>
		</Styled.Screen>
	);
}

export default Home;
