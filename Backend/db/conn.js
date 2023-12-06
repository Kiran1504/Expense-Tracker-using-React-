const mongoose = require('mongoose')

const url = process.env.DB;

mongoose.connect(url)
.then(()=>console.log("Database connected"))
.catch((err)=>console.log("connection failed"))