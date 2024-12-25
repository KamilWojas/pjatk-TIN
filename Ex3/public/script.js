document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const age = document.querySelector("#age").value.trim();

        let errors = [];

        if (name === "") {
            errors.push("Pole 'Imię' nie może być puste.");
        }

        if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
            errors.push("Pole 'Email' musi zawierać poprawny adres e-mail.");
        }

        if (age === "" || isNaN(age) || age <= 0) {
            errors.push("Pole 'Wiek' musi być liczbą większą od 0.");
        }

        if (errors.length > 0) {
            event.preventDefault();
            alert(errors.join("\n"));
        }
    });
});
