import React, { useState, useRef } from 'react';
import { View, ImageProps, Animated } from 'react-native';
import { Skeleton } from '@/components';

interface Props extends ImageProps {
	width: number;
	height: number;
	radius?: number;
}

function ImageWithLoading({
	style,
	width,
	height,
	radius,
	...props
}: Props): JSX.Element {
	const [loaded, setLoaded] = useState(false);
	const opacity = useRef(new Animated.Value(0)).current;

	const onLoad = () => {
		setLoaded(true);
		Animated.timing(opacity, {
			toValue: 1,
			duration: 300,
			useNativeDriver: true,
		}).start();
	};

	return (
		<View
			testID="image-with-loading"
			style={[
				style,
				{
					width,
					height,
				},
			]}
		>
			{!loaded && <Skeleton width={width} height={height} radius={radius} />}
			<Animated.Image
				{...props}
				style={[
					style,
					{
						position: 'absolute',
						opacity,
						width,
						height,
						borderRadius: radius,
					},
				]}
				onLoad={onLoad}
			/>
		</View>
	);
}

export default ImageWithLoading;
