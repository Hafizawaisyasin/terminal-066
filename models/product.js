var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var productSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 50
	  },
	
	price: { 
		type: Number, 
		min: 0
	  },
	weight: String,
});
const Product = mongoose.model("Product", productSchema);

function validateProduct(data) {
	const schema = Joi.object({
	  name: Joi.string().min(3).max(20).required(),
	  price: Joi.number().min(0).required(),
	  weight: Joi.string().required()
	});
	return schema.validate(data, { abortEarly: false });
  }
  module.exports.Product = Product;
  module.exports.validate = validateProduct;
