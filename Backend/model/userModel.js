const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

// module.exports = {User:mongoose.model('User', userSchema)}
const Users=mongoose.model('user', userSchema)

module.exports={
   Users
}