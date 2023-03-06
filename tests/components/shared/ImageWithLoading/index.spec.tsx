import React from 'react';
import { renderWithProviders } from 'tests/utils';
import { faker } from '@faker-js/faker';
import { Images } from '@/constants';
import { ImageWithLoading } from '@/components';

describe('ImageWithLoading', () => {
	const width = faker.datatype.number({ min: 1, max: 200 });
	const height = faker.datatype.number();
	const radius = faker.datatype.number();
	it('Should render corretly with properties', () => {
		const component = renderWithProviders(
			<ImageWithLoading
				width={width}
				height={height}
				radius={radius}
				source={Images.imageNotFound}
			/>
		);

		expect(component).toBeDefined();
	});
});
