import { act, ReactTestInstance } from 'react-test-renderer';
import { fireEvent } from '@testing-library/react-native';

type OrientationType = 'up' | 'bottom';

export const scrollListTo = (
	orientation: OrientationType,
	list: ReactTestInstance
) => {
	const contentOffsetY = orientation === 'bottom' ? 500 : -100;
	act(() => {
		fireEvent.scroll(list, {
			nativeEvent: {
				contentOffset: {
					y: contentOffsetY,
				},
				contentSize: {
					height: 500,
					width: 100,
				},
				layoutMeasurement: {
					height: 100,
					width: 100,
				},
			},
		});
	});

	act(() => {
		fireEvent(list, 'onEndReached');
	});
};
