/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
	preset: 'react-native',
	globals: {
		'ts-jest': {
			tsconfig: './tsconfig.spec.json',
		},
	},
	transform: {
		'\\.tsx?$': 'ts-jest',
	},
	rootDir: '..',
	testMatch: ['<rootDir>/e2e/**/*.spec.ts'],
	testTimeout: 120000,
	maxWorkers: 1,
	globalSetup: 'detox/runners/jest/globalSetup',
	globalTeardown: 'detox/runners/jest/globalTeardown',
	reporters: ['detox/runners/jest/reporter'],
	testEnvironment: 'detox/runners/jest/testEnvironment',
	verbose: true,
};
