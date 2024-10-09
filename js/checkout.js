//---------------------------------------------------------------------------------------------------------------------------------- Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const addressPattern = /^[a-zA-Z0-9\s.,'-áéíóúñÁÉÍÓÚÑ]+$/;
	const passwordPattern = /^[a-zA-Z0-9]{4,8}$/;
	const phonePattern = /^(\d{9}|((\+34)?\s?(\d{9})))$/;

	if (fName.value.trim() === "" || fName.value.length < 3) {
		errorName.style.display = "block";
		errorName.classList.add("is-invalid");
		error ++;
	} else {
		errorName.style.display = "none";
		errorName.classList.remove("is-invalid");
	}

	if (fEmail.value.trim() === "" || fEmail.value.length < 3 || !emailPattern.test(fEmail.value)) {
		errorEmail.style.display = "block";
		errorEmail.classList.add("is-invalid");
		error ++;
	} else {
		errorEmail.style.display = "none";
		errorEmail.classList.remove("is-invalid");
	}

	if (fAddress.value.trim() === "" || fAddress.value.length < 3 || !addressPattern.test(fAddress.value)) {
		errorAddress.style.display = "block";
		errorAddress.classList.add("is-invalid");
		error ++;
	} else {
		errorAddress.style.display = "none";
		errorAddress.classList.remove("is-invalid");
	}

	if (fLastN.value.trim() === "" || fLastN.value.length < 3) {
		errorLastN.style.display = "block";
		errorLastN.classList.add("is-invalid");
		error ++;
	} else {
		errorLastN.style.display = "none";
		errorLastN.classList.remove("is-invalid");
	}

	if (fPassword.value.trim() === "" || fPassword.value.length < 3 || !passwordPattern.test(fPassword.value)) {
		errorPassword.style.display = "block";
		errorPassword.classList.add("is-invalid");
		error ++;
	} else {
		errorPassword.style.display = "none";
		errorPassword.classList.remove("is-invalid");
	}

	if (fPhone.value.trim() === "" || fPhone.value.length < 3 || !phonePattern.test(fPhone.value)) {
		errorPhone.style.display = "block";
		errorPhone.classList.add("is-invalid");
		error ++;
	} else {
		errorPhone.style.display = "none";
		errorPhone.classList.remove("is-invalid");
	}

	if (error > 0) {
		return false;
	} else {
		return true;
	}
}
