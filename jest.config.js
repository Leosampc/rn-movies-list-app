module.exports = {
	preset: 'react-native',
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.spec.json',
			babelConfig: true,
		},
	},
	roots: ['<rootDir>/src/', '<rootDir>/tests/'],
	testMatch: ['<rootDir>/tests/**/?(*.)+(spec|test).[jt]s?(x)'],
	testEnvironment: 'node',
	testTimeout: 15000,
	transform: {
		'^.+\\.jsx$': 'babel-jest',
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.ts?$': 'ts-jest',
	},
	testPathIgnorePatterns: ['/node_modules', '/android', '/ios'],
	transformIgnorePatterns: [
		'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-vector-icons)/)',
	],
	setupFilesAfterEnv: ['./jest.setup.js'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'^react-native-dotenv(.*)$': '<rootDir>/.env',
	},
};
