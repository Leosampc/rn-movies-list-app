import React from 'react';
import { renderWithProviders } from 'tests/utils';
import { movieDetailsMock } from 'tests/__mocks__';
import { MovieListItem } from '@/screens/Home/components';

describe('MovieListItem component', () => {
	it('Should render corretly', () => {
		const component = renderWithProviders(
			<MovieListItem data={movieDetailsMock} />
		);

		expect(component).toBeDefined();
	});
});
