const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

const users = [
    { id: 1, name: "Shang Chi", city: "Beijing", phone: "iphone 12 pro max" },
    { id: 2, name: "Dwa Jio", city: "Bangkok", phone: "iphone 13 pro" },
    { id: 3, name: "Dunk Rick", city: "Dhaka", phone: "iphone 11 pro max" },
    { id: 4, name: "Cac Tun", city: "Deli", phone: "iphone 13 pro max" },
    { id: 5, name: "Thai Lang", city: "Tokyo", phone: "iphone 13" },
    { id: 6, name: "Leo Hung", city: "New york", phone: "iphone 13 pro max" },
    { id: 7, name: "Zyn Mali", city: "London", phone: "iphone 11 pro max" },
    { id: 8, name: "Leo Thane", city: "Paris", phone: "iphone 11" },
    { id: 9, name: "Li Sha", city: "Kabul", phone: "iphone 12 pro" }
]

app.get('/', (req, res) => {
    res.send('Hello Im from nodeJS');
});

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users)
    }
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.listen(port, () => {
    console.log('Listening to port', port);
})