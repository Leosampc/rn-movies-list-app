import React from 'react';
import { renderWithProviders } from 'tests/utils';
import { MovieSkeleton } from '@/screens/MovieDetails/components';

describe('MovieSkeleton component', () => {
	it('Should render corretly', () => {
		const component = renderWithProviders(<MovieSkeleton />);

		expect(component).toBeDefined();
	});
});
