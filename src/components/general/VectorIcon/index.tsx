import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { IColors } from '@/types';

type IconType =
	| 'antd'
	| 'entypo'
	| 'evil'
	| 'feather'
	| 'fontAwesome'
	| 'foundation'
	| 'ionicons'
	| 'material'
	| 'materialCommunity'
	| 'simpleLine'
	| 'octicons'
	| 'zocial'
	| 'fontisto';

const iconType = {
	antd: AntDesign,
	entypo: Entypo,
	evil: EvilIcons,
	feather: Feather,
	fontAwesome: FontAwesome,
	foundation: Foundation,
	ionicons: Ionicons,
	material: MaterialIcons,
	materialCommunity: MaterialCommunityIcons,
	simpleLine: SimpleLineIcons,
	octicons: Octicons,
	zocial: Zocial,
	fontisto: Fontisto,
};

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
		<View style={containerStyle}>
			<Icon {...props} color={iconColor} />
		</View>
	);
}

export default VectorIcon;
