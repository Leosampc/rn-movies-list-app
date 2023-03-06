/* eslint-disable max-len */
import { IMovie, MovieStatusType } from '@/types';
import { faker } from '@faker-js/faker';

const movieDetailsMock: IMovie = {
	backdropPath: faker.internet.url(),
	id: faker.datatype.number(),
	overview: faker.lorem.paragraph(),
	popularity: faker.datatype.float(),
	posterPath: faker.internet.url(),
	releaseDate: faker.datatype.datetime().toISOString().split('T')[0],
	title: faker.lorem.word(),
	voteAverage: faker.datatype.float({ min: 0, max: 10 }),
	voteCount: faker.datatype.number(),
	length: faker.datatype.number(),
	status: faker.lorem.word() as MovieStatusType,
};

export default movieDetailsMock;
