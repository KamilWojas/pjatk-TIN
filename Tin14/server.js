const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3008;

app.use(bodyParser.json());

let items = []; 
let currentId = 1;

app.get('/items', (req, res) => {
    res.json(items);
});

app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const item = items.find(item => item.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

app.post('/items', (req, res) => {
    const newItem = {
        id: currentId++,
        ...req.body
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        items[itemIndex] = { id: itemId, ...req.body };
        res.json(items[itemIndex]);
    } else {
        res.status(404).send('Item not found');
    }
});

app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Item not found');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
