import React from 'react';
import { renderWithProviders } from 'tests/utils';
import { faker } from '@faker-js/faker';
import { EmptyState } from '@/components';

describe('EmptyState component', () => {
	const makeText = faker.lorem.words();
	it('Should render corretly with text', () => {
		const component = renderWithProviders(<EmptyState text={makeText} />);
		const textComponent = component.getByText(makeText);

		expect(component).toBeDefined();
		expect(textComponent).toBeDefined();
	});
});
