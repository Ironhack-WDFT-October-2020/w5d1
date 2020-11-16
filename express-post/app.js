const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/post-example', (req, res) => {
    console.log('username: ', req.body.user);
    // check if credentials are correct and if yes log the user in    
    res.render('dashboard', { name: req.body.user });
});

app.listen(3000);