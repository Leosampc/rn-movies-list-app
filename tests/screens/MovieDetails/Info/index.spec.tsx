import React from 'react';
import { renderWithProviders } from 'tests/utils';
import { faker } from '@faker-js/faker';
import { Info } from '@/screens/MovieDetails/components';

describe('Info component', () => {
	const makeTitle = faker.datatype.string();
	const makeDescription = faker.lorem.words(2);
	it('Should render corretly with properties', () => {
		const component = renderWithProviders(
			<Info title={makeTitle} description={makeDescription} />
		);

		const [title] = component.getByText(makeTitle).children;
		const [description] = component.getByText(makeDescription).children;

		expect(component).toBeDefined();
		expect(title).toBe(makeTitle);
		expect(description).toBe(makeDescription);
	});
});
