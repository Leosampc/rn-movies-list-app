import React from 'react';
import { renderWithProviders } from 'tests/utils';
import { faker } from '@faker-js/faker';
import { Skeleton } from '@/components';

describe('Skeleton component', () => {
	const width = faker.datatype.number({ min: 1, max: 200 });
	const height = faker.datatype.number();
	const radius = faker.datatype.number();
	it('Should render corretly with properties', () => {
		const component = renderWithProviders(
			<Skeleton width={width} height={height} radius={radius} />
		);

		expect(component).toBeDefined();
	});
});
