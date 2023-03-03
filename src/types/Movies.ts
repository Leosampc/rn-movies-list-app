export interface IMovie {
	id: number;
	backdropPath: string;
	overview: string;
	popularity: number;
	posterPath: string;
	releaseDate: string;
	title: string;
	voteAverage: number;
	voteCount: number;
	status?: MovieStatusType;
	genres?: GenreType[];
	length?: number;
}

export type MovieStatusType =
	| 'Rumored'
	| 'Planned'
	| 'In Production'
	| 'Post'
	| 'Production'
	| 'Released'
	| 'Canceled';

export type GenreType = { id: number; name: string };
