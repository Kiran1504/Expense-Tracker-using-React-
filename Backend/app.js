const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')

const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn')
const User = require('./models/UserSchema');
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser())

app.use(require('./routes/auth'))

const port = process.env.PORT

if (process.env.NODE_ENV === "production") {
    app.use(express.static("Frontend/build"));
}

app.listen(port, function () {
    console.log("Listening on port", port);
})