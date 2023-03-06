import React from 'react';
import '@testing-library/jest-native/extend-expect';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
	const actualNav = jest.requireActual('@react-navigation/native');
	return {
		...actualNav,
		useNavigation: () => ({
			navigate: mockedNavigate,
			goBack: mockedNavigate,
		}),
		useRoute: () => ({}),
	};
});

jest.mock('react-native-gesture-handler', () => {
	const View = require('react-native/Libraries/Components/View/View');
	return {
		Swipeable: View,
		DrawerLayout: View,
		State: {},
		ScrollView: View,
		Slider: View,
		Switch: View,
		TextInput: View,
		ToolbarAndroid: View,
		ViewPagerAndroid: View,
		DrawerLayoutAndroid: View,
		WebView: View,
		NativeViewGestureHandler: View,
		TapGestureHandler: View,
		FlingGestureHandler: View,
		ForceTouchGestureHandler: View,
		LongPressGestureHandler: View,
		PanGestureHandler: View,
		PinchGestureHandler: View,
		RotationGestureHandler: View,
		/* Buttons */
		RawButton: View,
		BaseButton: View,
		RectButton: View,
		BorderlessButton: View,
		/* Other */
		FlatList: View,
		gestureHandlerRootHOC: jest.fn(),
		Directions: {},
	};
});

global.React = React;
