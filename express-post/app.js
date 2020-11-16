const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
let accessCount = 0;
// middleware
const count = () => {
    return (req, res, next) => {
        // console.log('hello from middleware');
        accessCount++;
        console.log(accessCount);
        next();
    }
}

// to add the middleware globally - for every request
app.use(count());

app.get('/', (req, res) => {
    res.render('form');
});

app.get('/another-route', (req, res) => {
    res.render('form');
});

app.post('/post-example', (req, res) => {
    console.log('username: ', req.body.user);
    // check if credentials are correct and if yes log the user in    
    res.render('dashboard', { name: req.body.user });
});

app.listen(3000);