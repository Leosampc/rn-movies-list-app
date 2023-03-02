module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'babel-plugin-root-import',
			{
				paths: [
					{
						rootPathPrefix: '@/',
						rootPathSuffix: './src/',
					},
					{
						rootPathPrefix: '@tests/',
						rootPathSuffix: './tests/',
					},
				],
			},
		],
		[
			'module:react-native-dotenv',
			{
				moduleName: 'react-native-dotenv',
				path: '.env',
				blacklist: null,
				whitelist: null,
				safe: false,
				allowUndefined: true,
			},
		],
	],
};
