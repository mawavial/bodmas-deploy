// eslint-disable-next-line no-undef
module.exports = {
	'moduleFileExtensions': [
		'js',
		'json',
		'ts'
	],
	'rootDir': './',
	'testRegex': '.test.ts$',
	'transform': {
		'^.+\\.(t|j)s$': 'ts-jest'
	},
	'collectCoverageFrom': [
		'**/*.(t|j)s'
	],
	'coverageDirectory': '../coverage',
	'testEnvironment': 'node'
}