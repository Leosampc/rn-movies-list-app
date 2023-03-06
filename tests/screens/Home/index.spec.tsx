import React from 'react';
import {
	waitFor,
	cleanup,
	waitForElementToBeRemoved,
} from '@testing-library/react-native';
import { renderWithProviders, scrollListToBottom } from 'tests/utils';
import { moviesAPI } from '@/services/APIs';
import { Home } from '@/screens';
import { makeUpComingMoviesMock } from 'tests/__mocks__';

beforeEach(() => {
	jest.clearAllMocks();
});

afterEach(cleanup);

let apiSpy;
describe('Home screen component', () => {
	it('Should render corretly', async () => {
		apiSpy = jest.spyOn(moviesAPI, 'getUpcoming');
		apiSpy.mockResolvedValueOnce(makeUpComingMoviesMock(1));

		const { getByTestId } = renderWithProviders(<Home />);

		const homeNode = await waitFor(() => getByTestId('home-screen'));

		expect(homeNode).toBeDefined();
	});

	it('Should render the upcoming movies list with items', async () => {
		const upComingMoviesMock = makeUpComingMoviesMock(3);
		apiSpy = jest.spyOn(moviesAPI, 'getUpcoming');
		apiSpy.mockResolvedValueOnce(upComingMoviesMock);

		const { getByTestId, queryByTestId } = renderWithProviders(<Home />);

		await waitForElementToBeRemoved(() => queryByTestId('movie-list-skeleton'));

		const list = await waitFor(() => getByTestId('upcoming-movies-list'));

		expect(list.props.data.length).toBe(upComingMoviesMock.length);
	});

	it('Should render upcoming movies list emptyState when list/data is empty', async () => {
		apiSpy = jest.spyOn(moviesAPI, 'getUpcoming');
		apiSpy.mockResolvedValueOnce([]);

		const { getByTestId } = renderWithProviders(<Home />);

		const emptyStateNode = await waitFor(() => getByTestId('empty-state'));

		expect(emptyStateNode).toBeDefined();
	});

	it('Should refetch with more data when scroll to end on upcoming movies list', async () => {
		const testID = 'upcoming-movies-list';
		const getUpcomingMockSize = 10;
		apiSpy = jest.spyOn(moviesAPI, 'getUpcoming');
		apiSpy.mockResolvedValueOnce(makeUpComingMoviesMock(getUpcomingMockSize));

		const { getByTestId, queryByTestId } = renderWithProviders(<Home />);

		const initialList = await waitFor(() => getByTestId(testID));

		expect(initialList.props.data.length).toBe(getUpcomingMockSize);

		apiSpy.mockResolvedValueOnce(makeUpComingMoviesMock(getUpcomingMockSize));

		waitFor(() => {
			scrollListToBottom(initialList);
		});

		await waitForElementToBeRemoved(() => queryByTestId('list-footer'));

		const finalList = await waitFor(() => getByTestId(testID));

		expect(finalList.props.data.length).toBe(getUpcomingMockSize * 2);
	});
});
