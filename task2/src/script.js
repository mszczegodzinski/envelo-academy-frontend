import { validatePin, validatePhone, formatPhone } from './utils.js';
const pickUpBtn = document.querySelector('.pick-up-btn');
const phoneInput = document.querySelector('#phone');
const pinInput = document.querySelector('#pin');
const phoneHelperText = document.querySelector('#phone + span');
const pinHelperText = document.querySelector('#pin + span');
const inputs = document.querySelector('.inputs');
const modal = document.querySelector('.modal');
const endBtn = document.querySelector('.end-btn');
const pickUpAnother = document.querySelector('.pick-up-next');
let isStep1 = false;

const togglePinError = (currentValue) => {
	const isValid = validatePin(currentValue);

	pinInput.classList.remove('error');
	pinHelperText.classList.remove('error-text');
	pinHelperText.textContent = '';

	if (!isValid) {
		pinInput.classList.add('error');
		pinHelperText.classList.add('error-text');
		pinHelperText.textContent = 'Nieprawidłowy kod.';
	}
};

pinInput.addEventListener('blur', (e) => {
	togglePinError(e.target.value);
});

pinInput.addEventListener('focus', () => {
	pinInput.classList.remove('error');
	pinHelperText.classList.remove('error-text');
	pinHelperText.textContent = '';
});

const togglePhoneError = (currentValue) => {
	const isValid = validatePhone(currentValue);

	phoneInput.classList.remove('error');
	phoneHelperText.classList.remove('error-text');
	phoneHelperText.textContent = '';

	if (!isValid) {
		phoneInput.classList.add('error');
		phoneHelperText.classList.add('error-text');
		phoneHelperText.textContent = 'Nieprawidłowy numer telefonu.';
	}
};

phoneInput.addEventListener('keyup', (e) => {
	const currentValue = e.target.value;
	const formattedVal = formatPhone(currentValue);
	phoneInput.value = formattedVal;
});

phoneInput.addEventListener('focus', () => {
	phoneInput.classList.remove('error');
	phoneHelperText.classList.remove('error-text');
	phoneHelperText.textContent = '';
});

phoneInput.addEventListener('blur', (e) => {
	togglePhoneError(e.target.value);
});

const hideModal = () => {
	modal.style.display = 'none';
};

const showModal = () => {
	modal.style.display = 'flex';
};

pickUpBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (!isStep1) {
		inputs.classList.remove('hidden');
		isStep1 = true;
		return null;
	}
	const isPhoneValid = validatePhone(phoneInput.value);
	const isPinValid = validatePin(pinInput.value);

	if (!isPhoneValid || !isPinValid) {
		togglePhoneError(phoneInput.value);
		togglePinError(pinInput.value);
		return null;
	}

	e.target.innerHTML =
		'<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>';
	setTimeout(() => {
		showModal();
		e.target.innerHTML = 'Odbierz paczkę';
	}, 1000);
});

const goToStep0 = () => {
	inputs.classList.add('hidden');
	pinInput.value = '';
	phoneInput.value = '';
	isStep1 = false;
	hideModal();
};

const goToStep1 = () => {
	pinInput.value = '';
	phoneInput.value = '';
	hideModal();
};

pickUpAnother.addEventListener('click', goToStep1);
endBtn.addEventListener('click', goToStep0);
