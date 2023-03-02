import { IColors } from './Theme';

declare module 'styled-components/native' {
	export interface DefaultTheme {
		colors: IColors;
	}
}
