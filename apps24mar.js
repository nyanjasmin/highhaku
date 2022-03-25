const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
    },
    mobile: {
        type: Number,
    },
});

const User = mongoose.model("user", )
module.exports = User;