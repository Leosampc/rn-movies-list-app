import { moviesAPI } from '@/services/APIs';
import upComingMoviesMock from './upComingMoviesMock';
import movieDetailsMock from './movieDetailsMock';

let apiSpy;
describe('moviesAPI', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	const page = 1;

	it('Upcoming Movies API success', async () => {
		apiSpy = jest.spyOn(moviesAPI, 'getUpcoming');
		apiSpy.mockResolvedValueOnce(upComingMoviesMock);

		const response = await moviesAPI.getUpcoming(page);

		expect(apiSpy).toBeCalledTimes(1);
		expect(response).toEqual(upComingMoviesMock);
	});

	it('Movie Details API success', async () => {
		apiSpy = jest.spyOn(moviesAPI, 'getDetails');
		apiSpy.mockResolvedValueOnce(movieDetailsMock);

		const response = await moviesAPI.getDetails(page);

		expect(apiSpy).toBeCalledTimes(1);
		expect(response).toEqual(movieDetailsMock);
	});
});
