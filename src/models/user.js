//Esquema del usuario
const mongoose = require("mongoose");

//Estructura del modelo de datos de un usuario
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema);