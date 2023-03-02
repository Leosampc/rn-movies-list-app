import { api } from '@/services/APIs/config';
import { mapper } from './mapper';
import { IMovie } from '@/types';
import { IRemoteMovie, GetUpcomingMoviesResponseType } from './types';

export const moviesAPI = {
	async getUpcoming(page: number): Promise<IMovie[]> {
		return api
			.get<GetUpcomingMoviesResponseType>('/movie/upcoming', {
				params: { page },
			})
			.then((response) =>
				response.data.results.map((remoteMovie) => mapper.parse(remoteMovie))
			)
			.catch((error) => Promise.reject(error));
	},
	async getDetails(movieId: number): Promise<IMovie> {
		return api
			.get<IRemoteMovie>(`/movie/${movieId}`)
			.then((response) => mapper.parse(response.data))
			.catch((error) => Promise.reject(error));
	},
};
