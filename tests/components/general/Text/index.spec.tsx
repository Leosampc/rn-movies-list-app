import React from 'react';
import { TextStyle } from 'react-native/types';
import { renderWithProviders } from 'tests/utils';
import { faker } from '@faker-js/faker';
import { defaultTheme } from '@/theme';
import { Text } from '@/components';

describe('Text component', () => {
	const testID = 'text';
	const makeText = faker.lorem.word();
	it('Should render corretly', () => {
		const component = renderWithProviders(<Text>{makeText}</Text>);

		expect(component).toBeDefined();
	});

	it('Should render with corretly color', () => {
		const color = 'secondary';
		const selectedColor = defaultTheme.colors[color];
		const { getByTestId } = renderWithProviders(
			<Text color={color}>{makeText}</Text>
		);
		const component = getByTestId(testID);

		const { color: componentColor } = component.props.style.find(
			(prop: TextStyle) => prop.color === selectedColor
		);

		expect(componentColor).toBeDefined();
		expect(componentColor).toEqual(selectedColor);
	});

	it('Should render with corretly font-weight', () => {
		const fontWeight = '800';
		const { getByTestId } = renderWithProviders(
			<Text fontWeight={fontWeight}>{makeText}</Text>
		);
		const component = getByTestId(testID);

		const { fontWeight: componentFontWeight } = component.props.style.find(
			(prop: TextStyle) => prop.fontWeight === fontWeight
		);

		expect(componentFontWeight).toBeDefined();
		expect(componentFontWeight).toEqual(fontWeight);
	});
});
