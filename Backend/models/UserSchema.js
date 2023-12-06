const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    expenses : [
        {
            date: {
                type: Date,
                required : true
            },
            category : {
                type: String,
                required: true,
            },
            amount:{
                type: String,
                required: true,
            }
        }
    ],
    tokens:[{
        token: {
            type: String,
            required: true,
        }
    }]
})


userSchema.methods.generateAuthToken = async function () {
    try {
        let newtoken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token: newtoken})
        await this.save()
        return newtoken
    } catch (error) {
        console.log(error);
    }
}
const User = mongoose.model('USER', userSchema);
module.exports = User;