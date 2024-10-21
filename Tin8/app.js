const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const productRoutes = require('./routes/productRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const staticPath = path.join(__dirname, 'public');
console.log('Static files served from:', staticPath);

app.use(express.static(staticPath));

app.use(productRoutes);

app.listen(3000, (err) => {
    if (err) {
        return console.error('Server failed to start', err);
    }
    console.log('Server is running on port 3000');
});







