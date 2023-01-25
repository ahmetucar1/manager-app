const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	

});

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		name: Joi.string().required().label("name"),
		email: Joi.string().email().required().label("email"),
		password: passwordComplexity().required().label("password"),
	});
	return schema.validate(data);
};

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
		expiresIn: "90d",
	});
	return token;
};

module.exports = { User, validate };
