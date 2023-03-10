import { GenreType, MovieStatusType } from '@/types';

export interface IRemoteMovie {
	id: number;
	backdrop_path: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	vote_average: number;
	vote_count: number;
	status?: MovieStatusType;
	genre?: GenreType[];
	runtime?: number;
}

export type GetUpcomingMoviesResponseType = {
	page: number;
	results: IRemoteMovie[];
};
