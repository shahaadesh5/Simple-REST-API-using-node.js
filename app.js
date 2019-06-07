const express = require('express'); //importing express
const app = express();  // this indicates app is using express method to run

//defining the path to the grades route API file:
const gradeRoutes = require('./api/routes/grade');

//running the app by sending requests to appropriate routes:
app.use('/grades', gradeRoutes);

//exporting the app to run on the server
module.exports = app;