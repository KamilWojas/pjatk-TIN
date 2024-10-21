const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        termCookie: req.cookies.termCookie || '',
        sessionCookie: req.cookies.sessionCookie || '',
        sessionVar: req.session.sessionVar || '',
        localStorageVar: '' 
    });
});

app.post('/submit', (req, res) => {
    const { termValue, sessionValue, sessionVar, localStorageVar } = req.body;

    res.cookie('termCookie', termValue, { maxAge: 24 * 60 * 60 * 1000 });

    res.cookie('sessionCookie', sessionValue);

    req.session.sessionVar = sessionVar;

    res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
