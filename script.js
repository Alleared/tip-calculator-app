// CODE TO ONLY ALLOW NUMBERS ON THE INPUTS
function validateInput(input) {
	input.value = input.value.replace(/[^0-9.]/g, "");
}

let percent = 0; 

// MAIN CALCULATION FUNCTION
function calculateBill(percentageButton) {
	// Get input values
	let inputBill = Number(document.querySelector(".js-input-bill").value);
	
	let numberOfPeople = Number(document.querySelector(".js-number-of-people").value);

	percent = percentageButton;

	// Calculate the percentage of the number
	let billButtonPercentage = (inputBill / 100) * percent;
	let totalBill = inputBill + billButtonPercentage;

	let totalNumberOfPeople = totalBill / numberOfPeople;
	let tipNumberOfPeople = billButtonPercentage / numberOfPeople;

	if (totalBill == 0) {
		document.querySelector(".js-total-bill").innerHTML = `&dollar;0.00`;
		document.querySelector(".js-tip-amount").innerHTML = `&dollar;0.00`;
	} else {
		// Bill amount
		document.querySelector(".js-total-bill").innerHTML = `&dollar;${totalBill.toFixed(2)}`;
		document.querySelector(".js-tip-amount").innerHTML = `&dollar;${billButtonPercentage.toFixed(2)}`;
	}

	if (numberOfPeople <= 0) {
		document.querySelector(".js-total-bill").innerHTML = `&dollar;${totalBill.toFixed(2)}`;

		document.querySelector(".js-tip-amount").innerHTML = `&dollar;${billButtonPercentage.toFixed(2)}`;
		document
			.querySelector(".number-of-people-field")
			.classList.add("number-of-people-error");

		document.querySelector(".cant-be-zero-paragraph").innerText =
			"Can't be zero";
	} else {
		document.querySelector(".cant-be-zero-paragraph").innerText = "";
		document
			.querySelector(".number-of-people-field")
			.classList.remove("number-of-people-error");

		// Bill amount
		document.querySelector(".js-total-bill").innerHTML = `&dollar;${totalNumberOfPeople.toFixed(2)}`;

		// Tip amount
		document.querySelector(".js-tip-amount").innerHTML = `&dollar;${tipNumberOfPeople.toFixed(2)}`;
	}

}


// CODES TO ACTIVATE PERCENTAGE BUTTONS
const percentageButtons = document.querySelectorAll(".js-percentage-button");

function activeButton(btn) {
	percentageButtons.forEach((inactive) => {
		inactive.classList.remove("percentage-button-active");
	});

	btn.classList.add("percentage-button-active");
	document.querySelector(".js-custom-percentage").value = "";
}

// CALCULATE CUSTOM PERCENTAGE
function custom () { 
	let inputCustomPercentage = Number(document.querySelector(".js-custom-percentage").value);

	percentageButtons.forEach((active) => {
		active.classList.remove("percentage-button-active");
	});
	calculateBill(inputCustomPercentage);
		
}

// CLEAR ALL THE INPUTS AND CALCULATIONS
function reset() {
	document.querySelector(".js-input-bill").value = "";
	document.querySelector(".number-of-people-field").value = "";
	document.querySelector(".js-custom-percentage").value = "";
	document.querySelector(".js-total-bill").innerHTML = `&dollar;0.00`;
	document.querySelector(".js-tip-amount").innerHTML = `&dollar;0.00`;
	document.querySelector('.cant-be-zero-paragraph').innerText = '';
	document.querySelector(".number-of-people-field").classList.remove("number-of-people-error");
	percent = 0;
	percentageButtons.forEach((active) => {
		active.classList.remove("percentage-button-active");
	});
}



