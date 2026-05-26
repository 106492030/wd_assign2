function recommendRestaurant() {

    let diet = document.getElementById("diet").value;
    let budget = document.getElementById("budget").value;
    let purpose = document.getElementById("purpose").value;

    let result = "";

    if (diet === "Vegan") {
        result = "We recommend Green Bowl!";
    }
    else if (purpose === "Date") {
        result = "We recommend Bella Italia!";
    }
    else if (budget === "High") {
        result = "We recommend Steak House!";
    }
    else {
        result = "We recommend Ocean Grill!";
    }

    document.getElementById("recommendation").innerHTML = result;
}

let registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        let errors = [];

        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let gender = document.getElementById("gender").value;

        let usernamePattern = /^[A-Za-z0-9_]+$/;
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let phonePattern = /^[0-9]+$/;

        if (username.length < 5 || !usernamePattern.test(username)) {
            errors.push("Invalid username");
        }

        if (!emailPattern.test(email)) {
            errors.push("Invalid email");
        }

        if (!phonePattern.test(phone) || phone.length < 8 || phone.length > 15) {
            errors.push("Invalid phone number");
        }

        if (password.length < 10) {
            errors.push("Password must be at least 10 characters");
        }

        if (password !== confirmPassword) {
            errors.push("Passwords do not match");
        }

        if (gender === "") {
            errors.push("Please select gender");
        }

        if (errors.length > 0) {

            event.preventDefault();

            document.getElementById("registerErrors").innerHTML =
                errors.join("<br>");
        }

    });

}

function updateDeposit() {

    let restaurant = document.getElementById("restaurant").value;
    let deposit = document.getElementById("deposit");

    if (restaurant === "Bella Italia") {
        deposit.value = "$20";
    }
    else if (restaurant === "Sakura Sushi") {
        deposit.value = "$25";
    }
    else if (restaurant === "Spice Garden") {
        deposit.value = "$15";
    }
    else if (restaurant === "Ocean Grill") {
        deposit.value = "$30";
    }
    else if (restaurant === "Green Bowl") {
        deposit.value = "$10";
    }
    else {
        deposit.value = "$35";
    }
}

updateDeposit();



function togglePayment() {

    let payment = document.getElementById("payment").value;

    if (payment === "Voucher") {

        document.getElementById("voucherSection").style.display = "block";
        document.getElementById("cardSection").style.display = "none";

    }
    else {

        document.getElementById("voucherSection").style.display = "none";
        document.getElementById("cardSection").style.display = "block";

    }
}



function sameEmail() {

    let email = document.getElementById("reserveEmail").value;

    document.getElementById("billing").value = email;
}



let reservationForm = document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function(event) {

        let errors = [];

        let email = document.getElementById("reserveEmail").value;
        let phone = document.getElementById("reservePhone").value;
        let people = document.getElementById("people").value;
        let date = document.getElementById("date").value;
        let payment = document.getElementById("payment").value;
        let card = document.getElementById("card").value;

        let today = new Date();
        let selectedDate = new Date(date);

        if (selectedDate < today) {
            errors.push("Reservation date cannot be in the past");
        }

        if (people <= 0) {
            errors.push("Number of people must be greater than 0");
        }

        if (phone.length < 10) {
            errors.push("Phone number must be at least 10 digits");
        }

        if (payment === "Online Payment") {

            if (!(card.length === 15 || card.length === 16)) {
                errors.push("Card number must be 15 or 16 digits");
            }
        }

        if (errors.length > 0) {

            event.preventDefault();

            document.getElementById("reservationErrors").innerHTML =
                errors.join("<br>");
        }

    });

}
