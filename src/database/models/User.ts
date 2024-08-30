//const mongoose = require('mongoose');

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required!']
    },
    email: {
        type: String,
        required: [true, 'Email is required!']
    },
    password: {
        type: String,
        select: false,
        required: [true, 'Password is required!'],
        minLength: [6, 'The password should be at least 6 characters long!'],
    },
    img: {
        data: {
            type: Buffer,
            contentType: String,
        },
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;