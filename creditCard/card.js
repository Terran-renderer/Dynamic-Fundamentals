function isCardNumberValid(number) {
	return number === '1234123412341234';
}

function displayError(msg) {
	document.querySelector('.errorMsg').innerHTML = msg;
}

function displayDateError(msg) {
	document.querySelector('.dateErrorMsg').innerHTML = msg;
}

function isDateValid(month, year) {
	const now = new Date();
	const currentMonth = now.getMonth() + 1; 
	const currentYear = now.getFullYear();

	if (year > currentYear) {
		return true;
	} else if (year === currentYear && month > currentMonth) {
		return true;
	}
	return false;
}

function submitHandler(event) {
	event.preventDefault();

	// Clear previous errors
	displayError('');
	displayDateError('');

	let errorMsg = '';
	let dateErrorMsg = '';

	// Card number validation
	const cardNumber = this.cardNumber.value.trim();
	if (isNaN(cardNumber)) {
		errorMsg += 'Card number is not a valid number<br>';
	} else if (!isCardNumberValid(cardNumber)) {
		errorMsg += 'Card number is not a valid card number<br>';
	}

	// Date i think
	const month = parseInt(this.expiryMonth.value, 10);
	const year = parseInt(this.expiryYear.value, 10);

	if (!isDateValid(month, year)) {
		dateErrorMsg += 'Expiration date must be in the future<br>';
	}

	// Show errors
	if (errorMsg !== '') {
		displayError(errorMsg);
	}
	if (dateErrorMsg !== '') {
		displayDateError(dateErrorMsg);
	}

	if (errorMsg !== '' || dateErrorMsg !== '') {
		return false;
	}

	// All good
	return true;
}

document.querySelector('#creditCardForm').addEventListener('submit', submitHandler);
