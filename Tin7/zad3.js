const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    res.render('results', { name, email, message });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
