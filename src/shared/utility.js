/**
 * Receives two objects and turn into a one with updated properties.
 * @param {*} oldObject object
 * @param {*} updatedProperties custom object with properties inside. eg: { potato: 1 }
 */
export const updateObject = (oldObject, updatedProperties) => {
	return {
		...oldObject, // deep clone, because of 'spread'
		...updatedProperties,
	};
};

export const checkValidity = (value, rules) => {
	let isValid = true; // starts as valid

	// depends on which rules we have
	if (rules.required) isValid = value.trim() !== '' && isValid; // basically checking if field value is empty or filled with white spaces

	// another example
	if (rules.minLength) isValid = value.length >= rules.minLength && isValid;

	if (rules.maxLength) isValid = value.length <= rules.maxLength && isValid;

	if (rules.isEmail) {
		const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
		isValid = pattern.test(value) && isValid;
	}

	if (rules.isNumeric) {
		const pattern = /^\d+$/;
		isValid = pattern.test(value) && isValid;
	}

	// passing 'isValid' to all the verifications will make sure that if
	// it gets reproved in one of them, it won't pass in any other.
	return isValid;
};
