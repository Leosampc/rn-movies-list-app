module.exports = {
	preset: 'react-native',
	roots: ['<rootDir>/src/', '<rootDir>/tests/'],
	testMatch: ['<rootDir>/tests/**/?(*.)+(spec|test).[jt]s?(x)'],
	testEnvironment: 'node',
	testTimeout: 15000,
	transform: {
		'^.+\\.jsx$': 'babel-jest',
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				babelConfig: true,
			},
		],
		'^.+\\.ts?$': [
			'ts-jest',
			{
				babelConfig: true,
			},
		],
	},
	testPathIgnorePatterns: ['/node_modules', '/android', '/ios', '/e2e'],
	transformIgnorePatterns: [
		'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-vector-icons)/)',
	],
	setupFilesAfterEnv: ['./jest.setup.js', './tests/__mocks__/axios.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	moduleNameMapper: {
		'^react-native-dotenv(.*)$': '<rootDir>/.env',
	},
};
