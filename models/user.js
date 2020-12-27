// const config = require("config");
//const jwt = require("jsonwebtoken");
const Joi = require("@hapi/joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 50,
	},
	email: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 255,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 1024,
	},
	phone_no:{
		type: String,

	}
});

// userSchema.methods.generateAuthToken = function () {
// 	const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get("jwtPrivateKey"));
// 	return token;
// };

const User = mongoose.model("User", userSchema);

function validateUser(user) {
	const schema =Joi.object( {
		name: Joi.string().min(5).max(50).required(),
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required(),
		phone_no:Joi.string()
	});

	return schema.validate(user, { abortEarly: false });
}

exports.User = User;
exports.validate = validateUser;
