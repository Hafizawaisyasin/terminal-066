const Joi = require("joi");
const mongoose = require("mongoose");

const dietSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 50,
	},
	description: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 900,
	},
});

const Diet = mongoose.model("Diet", dietSchema);

function validateDiet(data) {
	const schema = Joi.object({
	  type: Joi.string().min(3).max(20).required(),
	  description: Joi.string().min(10).max(400).required(),

	});
	return schema.validate(data, { abortEarly: false });
  }
  module.exports.Diet = Diet;
  module.exports.validate = validateDiet;

