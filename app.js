const express = require('express');
const path = require('path');

const indexRouter = require('./routes/indexRouter');
const messageRouter = require('./routes/messageRouter');

const app = express();

// Setting up EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static assets
app.use(express.static(path.join(__dirname, 'public')));

// Parse form data into req.body
app.use(express.urlencoded({ extended: true }));

// Routing
app.use('/new', messageRouter);
app.use('/', indexRouter);

// 404
app.use((req, res) => {
  res.render('404');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
