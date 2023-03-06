import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import { IColors } from '@/types';
import iconType, { IconType } from './iconType';

interface Props {
	size: number;
	name: string;
	type: IconType;
	color: IColors | string;
	containerStyle?: StyleProp<ViewStyle>;
}
function VectorIcon({
	type,
	color,
	containerStyle,
	...props
}: Props): JSX.Element {
	const theme = useTheme();
	const Icon = iconType[type];
	const iconColor = theme.colors[color as keyof IColors] ?? color;

	return (
		<View testID="vector-icon" style={containerStyle}>
			<Icon {...props} color={iconColor} />
		</View>
	);
}

export default VectorIcon;
