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
    const path = require("path");
    app.use(express.static("Frontend/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'));
    })
}

app.listen(port, function () {
    console.log("Listening on port", port);
})