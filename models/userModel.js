const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema(
    {
        username: String,
        password: String,
        email: String,
        firstName: String,
        lastName: String,
        joinDate: {
            type: Mongoose.Schema.Types.Date,
            default: new Date()
        }
    }
);

const User = Mongoose.model('User', userSchema);
module.exports = User;