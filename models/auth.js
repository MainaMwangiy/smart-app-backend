const mongoose = require("mongoose")
const uuid = require("uuid");
const bcrypt = require("bcryptjs");

const AuthSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuid.v1,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
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
// AuthSchema.pre('save', async function(next) {
// 	try {
// 		if (!this.isModified('password')) {
// 			return next();
// 		}
// 		const hashed = await bcrypt.hash(this.password, 10);
// 		this.password = hashed;
// 		return next();
// 	} catch (err) {
// 		return next(err);
// 	}
// });

// AuthSchema.methods.comparePassword = async function(attempt, next) {
// 	try {
// 		return await bcrypt.compare(attempt, this.password);
// 	} catch (err) {
// 		next(err);
// 	}
// };

module.exports = mongoose.model("Auth", AuthSchema)