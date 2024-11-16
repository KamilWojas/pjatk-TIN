document.getElementById("userForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Pobieranie wartości pól formularza
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();

    // Walidacja
    let isValid = true;
    let errorMessage = "";

    // Sprawdzenie imienia (minimum 3 znaki)
    if (name.length < 3) {
        isValid = false;
        errorMessage += "Imię musi mieć co najmniej 3 znaki.<br>";
    }

    // Sprawdzenie e-maila (regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        errorMessage += "Podaj poprawny adres e-mail.<br>";
    }

    // Sprawdzenie wieku (minimum 18 lat)
    if (age < 18) {
        isValid = false;
        errorMessage += "Musisz mieć co najmniej 18 lat.<br>";
    }

    // Wyświetlanie błędów walidacji
    const errorDiv = document.createElement("div");
    errorDiv.id = "error";
    errorDiv.innerHTML = errorMessage;

    if (!isValid) {
        document.querySelector(".container").appendChild(errorDiv);
        errorDiv.style.display = "block";
        return;
    } else {
        if (document.getElementById("error")) {
            document.getElementById("error").remove();
        }
    }

    // Modyfikacja strony na podstawie danych z formularza
    const output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = `
        <h2>Dane użytkownika</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Wiek:</strong> ${age}</p>
    `;
});
