document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("#name").value;
        const email = form.querySelector("#email").value;
        const age = form.querySelector("#age").value;

        // Czyść wcześniejsze komunikaty o błędach
        document.getElementById("nameError").innerText = '';
        document.getElementById("emailError").innerText = '';
        document.getElementById("ageError").innerText = '';

        // Sprawdzenie, czy pola są puste
        if (!name) {
            document.getElementById("nameError").innerText = 'Pole wymaga uzupełnienia';
            return;
        }

        if (!email) {
            document.getElementById("emailError").innerText = 'Pole wymaga uzupełnienia';
            return;
        }

        if (!age) {
            document.getElementById("ageError").innerText = 'Pole wymaga uzupełnienia';
            return;
        }

        if (age <= 18) {
            document.getElementById("ageError").innerText = "Twój wiek nie może być mniejszy niż 18";
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").innerText = "Podaj poprawny adres e-mail.";
            return;
        }

        const output = `Witaj, ${name}! Twój email, to ${email}, a twój wiek to, ${age}.`;
        resultDiv.innerText = output;

        form.reset();
    });
});


