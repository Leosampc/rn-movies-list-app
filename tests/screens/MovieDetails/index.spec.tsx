import React from 'react';
import {
	waitFor,
	cleanup,
	waitForElementToBeRemoved,
} from '@testing-library/react-native';
import { renderWithProviders } from 'tests/utils';
import { moviesAPI } from '@/services/APIs';
import { MovieDetails } from '@/screens';
import { movieDetailsMock } from 'tests/__mocks__';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@/navigation/types';

beforeEach(() => {
	jest.clearAllMocks();
});

afterEach(cleanup);

const route: RouteProp<RootStackParamList, 'MovieDetails'> = {
	key: '1',
	name: 'MovieDetails',
	params: {
		id: 123,
	},
};

const props = {
	route,
	navigation: {} as any,
};

let apiSpy;
describe('MovieDetails screen component', () => {
	it('Should render corretly', async () => {
		apiSpy = jest.spyOn(moviesAPI, 'getDetails');
		apiSpy.mockResolvedValueOnce(movieDetailsMock);

		const { getByTestId } = renderWithProviders(<MovieDetails {...props} />);

		const movieDetailsNode = await waitFor(() =>
			getByTestId('movie-details-screen')
		);

		expect(movieDetailsNode).toBeDefined();
	});

	it('Should render the details of the movie', async () => {
		apiSpy = jest.spyOn(moviesAPI, 'getDetails');
		apiSpy.mockResolvedValueOnce(movieDetailsMock);

		const { getByText, queryByTestId } = renderWithProviders(
			<MovieDetails {...props} />
		);

		await waitForElementToBeRemoved(() => queryByTestId('movie-skeleton'));

		expect(getByText(movieDetailsMock.title).children[0]).toBeTruthy();
	});

	it('Should render emptyState when api throw an error', async () => {
		apiSpy = jest.spyOn(moviesAPI, 'getDetails');
		apiSpy.mockRejectedValueOnce(new Error('Movie not found.'));

		const { getByTestId } = renderWithProviders(<MovieDetails {...props} />);

		const emptyScreenNode = await waitFor(() =>
			getByTestId('movie-details-empty-screen')
		);

		expect(emptyScreenNode).toBeDefined();
	});

	it('Should refetch data when scroll up to handle refreshControl', async () => {
		apiSpy = jest.spyOn(moviesAPI, 'getDetails');
		apiSpy.mockRejectedValueOnce(new Error('Movie not found.'));

		const { getByTestId, queryByTestId } = renderWithProviders(
			<MovieDetails {...props} />
		);

		const emptyScreenNode = await waitFor(() =>
			getByTestId('movie-details-empty-screen')
		);
		expect(emptyScreenNode).toBeDefined();

		const { refreshControl } = emptyScreenNode.props;

		apiSpy.mockResolvedValueOnce(movieDetailsMock);

		waitFor(() => {
			refreshControl.props.onRefresh();
		});

		await waitForElementToBeRemoved(() => queryByTestId('movie-skeleton'));

		const movieDetailsNode = await waitFor(() =>
			getByTestId('movie-details-screen')
		);

		expect(movieDetailsNode).toBeTruthy();
	});
});
