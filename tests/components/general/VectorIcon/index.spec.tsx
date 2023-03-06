import React from 'react';
import { renderWithProviders } from 'tests/utils';
import { faker } from '@faker-js/faker';
import { VectorIcon } from '@/components';
import iconType, { IconType } from '@/components/general/VectorIcon/iconType';

const iconNamesMock = {
	antd: 'stepforward',
	entypo: '500px',
	evil: 'archive',
	feather: 'activity',
	fontAwesome: 'glass',
	foundation: 'address-book',
	ionicons: 'add',
	material: '360',
	materialCommunity: 'ab-testing',
	simpleLine: 'user',
	octicons: 'accessibility',
	zocial: 'acrobat',
	fontisto: 'acrobat-reader',
};

describe('VectorIcon component', () => {
	const size = faker.datatype.number({ min: 1, max: 50 });
	const color = 'tertiary';
	const name = 'info';
	it('Should render corretly with properties', () => {
		const component = renderWithProviders(
			<VectorIcon size={size} color={color} name={name} type="antd" />
		);

		expect(component).toBeDefined();
	});

	Object.keys(iconType).forEach((type) => {
		const currentType = type as IconType;
		const currentName = iconNamesMock[type as keyof typeof iconNamesMock];
		it(`Should render corretly ${type}`, () => {
			const component = renderWithProviders(
				<VectorIcon
					size={size}
					color={color}
					name={currentName}
					type={currentType}
				/>
			);

			expect(component).toBeDefined();
		});
	});
});
