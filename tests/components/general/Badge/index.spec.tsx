import React from 'react';
import { ViewStyle, TextStyle } from 'react-native/types';
import { renderWithProviders } from 'tests/utils';
import { faker } from '@faker-js/faker';
import { defaultTheme } from '@/theme';
import { Badge } from '@/components';

describe('Badge component', () => {
	const testID = 'badge';
	const color = 'primary';
	const selectedColor = defaultTheme.colors[color];
	const makeText = faker.lorem.words();
	it('Should render corretly with properties', () => {
		const component = renderWithProviders(
			<Badge title={makeText} color={color} textColor={color} />
		);

		expect(component).toBeDefined();
	});

	it('Should render corretly with colors correctly', () => {
		const { getByTestId, getByText } = renderWithProviders(
			<Badge title={makeText} color={color} textColor={color} />
		);

		const badgeComponent = getByTestId(testID);
		const badgeTextComponent = getByText(makeText);

		const { backgroundColor: badgeColor } = badgeComponent.props.style.find(
			(prop: ViewStyle) => prop.backgroundColor === selectedColor
		);
		const { color: badgeTextColor } = badgeTextComponent.props.style.find(
			(prop: TextStyle) => prop.color === selectedColor
		);

		expect(badgeColor).toBe(selectedColor);
		expect(badgeTextColor).toBe(selectedColor);
	});
});
