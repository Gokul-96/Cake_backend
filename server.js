const express = require('express');
// const mongoose = require('mongoose');
const Cake = require('./models/cakeModel')

const app = express();
const db =require("./db")
// Middleware to parse JSON bodies
app.use(express.json());

// const cakesRoute = require ('./routes/cakesRoute')

// app.use('/api/cakes/', cakesRoute)

// Routes
app.get('/', (req, res) => {
  res.send('Server working');
});

app.get('/getcakes', async (req, res) => {
  try {
    const cakes = await Cake.find({}); // Use await with Cake.find() which returns a promise
    res.send(cakes);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});


const PORT = process.env.PORT || 8000;



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});