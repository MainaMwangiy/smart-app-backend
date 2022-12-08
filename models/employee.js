const mongoose = require("mongoose")
const uuid = require("uuid");
const bcrypt = require("bcryptjs");

const EmployeeSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuid.v1,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String, 
        required: true
    },
    address: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    deleted: {
        type: Boolean
    }
})

module.exports = mongoose.model("Employee", EmployeeSchema)