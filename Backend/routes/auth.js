const express = require('express');
const User = require('../models/UserSchema');
const router = express.Router()
const authenticate = require("../middleware/authenticate")
const jwt = require("jsonwebtoken")

//home route
router.get("/home", authenticate, async (req, res) => {
    try {

        // console.log(rootUser);
        res.send(req.rootUser);
    } catch (error) {
        console.log(error);
    }
})

router.post("/register", async (req, res) => {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(422).json({ error: "plzz fill properly" })
    }

    try {
        const userexist = await User.findOne({ email: email });

        if (userexist) {
            return res.status(422).json({ error: "email already registered" })
        }

        const user = new User({ name, email, phone, password });

        const data = await user.save(); //i got the error here i used schema name for save func....
        if (data) {
            res.status(201).json({ message: "success" });
        } else {
            res.status(500).json({ error: "failed to register" })
        }

    } catch (error) {
        res.status(422).json({ error: "wrong input" })
    }
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "invalid credentials" })
    }
    const userdata = await User.findOne({ email })
    if (userdata && userdata.password === password) {
        let token = await userdata.generateAuthToken();
        res.cookie("jwtauth", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        })
        return res.status(200).json({ message: "Login success" })
    }
    else if (userdata && userdata.password !== password) {
        return res.status(422).json({ error: "invalid credentials" })
    }
    else {
        return res.status(422).json({ error: "User not exist" })
    }
})

router.get("/logout", (req, res) => {
    console.log("logout success");
    res.clearCookie('jwtauth', { path: '/' })
    res.send({ message: 'User logout success' })
})

router.post("/addexpense", authenticate, async (req, res) => {
    const { date, cat, amt } = req.body
    if (!date || !cat || !amt) {
        return res.status(422).json({ error: "empty fields" })
    }
    try {
        const userdata = await User.findOne({ _id: req.userId })
        userdata.expenses = userdata.expenses.concat({ date: date, category: cat, amount: amt })
        await userdata.save()
        res.status(200).json({ message: "expense added" })
    } catch (error) {
        console.log(error);
        return res.status(422).json({ error: error })
    }
})

router.post("/updateexpenses", async (req, res) => {
    try {
        const expenses = req.body
        console.log(expenses);
        const token = req.cookies.jwtauth
        if (token) {

            const verify = jwt.verify(token, process.env.SECRET_KEY)
            const rootUser = await User.findOne({ _id: verify._id, "tokens.token": token })
            if (!rootUser) {
                throw new Error("user not found")
            }
            rootUser.expenses = expenses
            await rootUser.save()
            res.send({ message: "success for upate" })
        }
        else {
            req.rootUser = {}
        }
    } catch (error) {
        console.log(error);
        res.send(error)
    }

})

module.exports = router;