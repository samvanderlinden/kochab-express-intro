const express = require('express'); // this says to go find module named 'express'. Whatever it exports we will import

const app = express();
const PORT = 5000;

// server needs to be constantly listening for requests and sending responses
app.listen(PORT);

