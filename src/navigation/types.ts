import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	Home: undefined;
	MovieDetails: { id: number };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, T>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
