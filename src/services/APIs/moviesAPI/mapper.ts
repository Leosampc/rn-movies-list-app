import { IMovie } from '@/types';
import { RemoteMovie } from './types';

export const mapper = {
	parse({
		backdrop_path,
		poster_path,
		release_date,
		vote_average,
		vote_count,
		...remoteMovie
	}: RemoteMovie): IMovie {
		return {
			...remoteMovie,
			backdropPath: backdrop_path,
			posterPath: poster_path,
			releaseDate: release_date,
			voteAverage: vote_average,
			voteCount: vote_count,
		};
	},
};
