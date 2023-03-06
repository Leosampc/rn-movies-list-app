import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as Styled from './styled';

interface Props {
	width: number;
	height?: number | string;
	radius?: number;
	style?: StyleProp<ViewStyle>;
}

function Skeleton({ width, height, radius, style }: Props): JSX.Element {
	const theme = useTheme();
	const translateX = useRef(new Animated.Value(-width)).current;

	useEffect(() => {
		Animated.loop(
			Animated.timing(translateX, {
				toValue: width,
				useNativeDriver: true,
				duration: 1000,
			})
		).start();
	}, [width, translateX]);
	return (
		<View
			style={StyleSheet.flatten([
				{
					width,
					height,
					borderRadius: radius,
					backgroundColor: `${theme.colors.black}29`,
					overflow: 'hidden',
				},
				style,
			])}
			testID="skeleton"
		>
			<Animated.View style={{ transform: [{ translateX }] }}>
				<Styled.LinearGradient />
			</Animated.View>
		</View>
	);
}

export default Skeleton;
