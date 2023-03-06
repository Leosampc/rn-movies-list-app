import { act, ReactTestInstance } from 'react-test-renderer';
import { fireEvent } from '@testing-library/react-native';

export const scrollListToBottom = (list: ReactTestInstance) => {
	act(() => {
		fireEvent.scroll(list, {
			nativeEvent: {
				contentOffset: {
					y: 500,
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
