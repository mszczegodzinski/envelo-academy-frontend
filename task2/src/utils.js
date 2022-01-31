const validatePin = (pin) => {
	const pinRegex = new RegExp('^[0-9]{4}$');
	return pinRegex.test(pin);
};

const validatePhone = (phone) => {
	const phoneRegex = new RegExp('^[0-9]{9}$');
	return phoneRegex.test(phone.replace(/' '/g, ''));
};

const formatPhone = (phone) => {
	const currentVal = phone.replace(/' '/g, '');
	const splitted = currentVal.split('');
	if (splitted.length > 6) {
		splitted.splice(6, 0, ' ');
		splitted.splice(3, 0, ' ');
		return splitted.join('');
	}

	if (splitted.length > 3) {
		splitted.splice(3, 0, ' ');
		return splitted.join('');
	}

	return currentVal;
};

const utils = {
	validatePin,
	validatePhone,
	formatPhone,
};

module.exports = utils;
