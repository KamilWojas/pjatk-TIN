const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.post('/submit', (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age || age <= 0) {
        return res.status(400).send(`
            <h1>Błąd walidacji!</h1>
            <p>Upewnij się, że wszystkie pola zostały poprawnie wypełnione.</p>
            <a href="/">Powrót do formularza</a>
        `);
    }

    const ageInMonths = age * 12;

    res.send(`
        <h1>Dane otrzymane:</h1>
        <p>Imię: ${name}</p>
        <p>Email: ${email}</p>
        <p>Wiek w miesiącach: ${ageInMonths}</p>
        <a href="/">Powrót do formularza</a>
    `);
});

app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
