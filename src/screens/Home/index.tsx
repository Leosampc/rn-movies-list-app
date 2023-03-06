import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, ListRenderItem, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';
import { moviesAPI } from '@/services';
import { IMovie } from '@/types';
import { EmptyState } from '@/components';
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
			console.log(error.message);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const onEndReached = useCallback(() => {
		if (!isLoading && upComingMovies.length > 0)
			setCurrentPage((prevState) => prevState + 1);
	}, [isLoading, upComingMovies]);

	const onRefresh = useCallback(() => {
		if (upComingMovies.length === 0) {
			handleFetchUpComingMovies(1);
		} else {
			setCurrentPage(1);
		}
	}, [handleFetchUpComingMovies, upComingMovies]);

	const renderListItem: ListRenderItem<IMovie> = useCallback(
		({ item }) => <MovieListItem data={item} />,
		[]
	);

	const keyExtractor = (item: IMovie) => item.id.toString();

	const renderListFooter = () => {
		if (!isLoading) return null;
		return (
			<Styled.ListFooter testID="list-footer">
				<ActivityIndicator size="large" color={theme.colors.secondary} />
			</Styled.ListFooter>
		);
	};

	const renderEmptyList = () => {
		if (isLoading) return null;
		return (
			<EmptyState text={'Sorry, something went wrong :(\n Try again later.'} />
		);
	};

	useEffect(() => {
		handleFetchUpComingMovies(currentPage);
	}, [currentPage, handleFetchUpComingMovies]);

	if (isLoading && upComingMovies.length === 0) return <MovieListSkeleton />;

	return (
		<Styled.Screen testID="home-screen">
			<FlatList<IMovie>
				testID="upcoming-movies-list"
				extraData={currentPage}
				data={upComingMovies}
				contentContainerStyle={Styled.styles.list}
				showsVerticalScrollIndicator={false}
				renderItem={renderListItem}
				keyExtractor={keyExtractor}
				ItemSeparatorComponent={Styled.SeparatorComponent}
				ListFooterComponent={renderListFooter}
				ListEmptyComponent={renderEmptyList}
				onEndReached={onEndReached}
				onEndReachedThreshold={0.2}
				onRefresh={onRefresh}
				refreshing={isLoading}
				maxToRenderPerBatch={8}
			/>
		</Styled.Screen>
	);
}

export default Home;
