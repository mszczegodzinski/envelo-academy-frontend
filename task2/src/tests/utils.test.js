const utils = require('./utilsJest.js');
const { validatePin, validatePhone, formatPhone } = utils;

describe('utils tests', () => {
	it('validate right pin', () => {
		expect(validatePin('1234')).toBe(true);
	});

	it('validate wrong pin too short', () => {
		expect(validatePin()).toBe(false);
		expect(validatePin('34')).toBe(false);
		expect(validatePin(34)).toBe(false);
		expect(validatePin('123')).toBe(false);
	});

	it('validate wrong pin too long', () => {
		expect(validatePin('123 45')).toBe(false);
		expect(validatePin('14555')).toBe(false);
	});

	it('validate wrong pin illegal characters', () => {
		expect(validatePin('123a')).toBe(false);
		expect(validatePin('12b3')).toBe(false);
	});

	it('validate phone right pattern', () => {
		expect(validatePhone('123456789')).toBe(true);
	});

	it('validate phone too short', () => {
		expect(validatePhone('123')).toBe(false);
		expect(validatePhone('12345')).toBe(false);
	});

	it('validate phone too long', () => {
		expect(validatePhone('1234567890')).toBe(false);
	});

	it('validate phone illegal character', () => {
		expect(validatePhone('12345678a')).toBe(false);
		expect(validatePhone('123a5678a')).toBe(false);
	});

	it('format phone righ', () => {
		expect(formatPhone('1234')).toBe('123 4');
		expect(formatPhone('123456')).toBe('123 456');
		expect(formatPhone('1234567')).toBe('123 456 7');
		expect(formatPhone('12345678')).toBe('123 456 78');
		expect(formatPhone('123456789')).toBe('123 456 789');
	});
});
