const express = require ('express');
const usersRouter = require ('./routes/users');
const moviesRouter = require ('./routes/movies');
const ordersRouter = require ('./routes/orders');

const app = express ();
const PORT = 3000;

app.use (express.json ());

app.use ('/users', usersRouter);
app.use ('/movies', moviesRouter);
app.use ('/orders', ordersRouter);

app.listen (PORT, () => console.log ('Server is up at port: ' + PORT))