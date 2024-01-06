// Create web server with Express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [
    {username: 'Todd', comment: 'lololol'},
    {username: 'Skyler', comment: 'I hate everything'},
    {username: 'Sk8erBoi', comment: 'Plz delete your account, Todd'}
];

// Tell Express to use body-parser
app.use(bodyParser.urlencoded({extended: false}));

// Tell Express to use EJS as its view engine
app.set('view engine', 'ejs');

// GET /comments - list all comments
app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
});

// GET /comments/new - show new comment form
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

// POST /comments - create a new comment
app.post('/comments', (req, res) => {
    const {username, comment} = req.body;
    comments.push({username, comment});
    res.redirect('/comments');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});