import React from 'react';
import { renderWithProviders } from 'tests/utils';
import { MovieListSkeleton } from '@/screens/Home/components';

describe('MovieListSkeleton component', () => {
	it('Should render corretly', () => {
		const component = renderWithProviders(<MovieListSkeleton />);

		expect(component).toBeDefined();
	});
});
