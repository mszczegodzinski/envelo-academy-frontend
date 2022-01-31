module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json',
			diagnostics: true,
		},
		NODE_ENV: 'test',
	},
	moduleNameMapper: {
		'^Components/(.+)$': '<rootDir>/task2/src/components/$1',
	},
	moduleDirectories: ['node_modules', 'src'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	verbose: true,
};
