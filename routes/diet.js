var express = require("express");
var router = express.Router();
var checkSessionAuth = require("../middlewares/checkSessionAuth");
var {Diet,validate} = require("../models/diet");

/* GET users listing. */
router.get("/", async function (req, res, next) {
	let diets = await Diet.find();
	//console.log(req.session.user);
	res.render("diet/list", { title: "Here are The Diet plans", diets });
});
router.get("/", function (req, res, next) {
	res.render("diet/list");
});
//add
router.get("/add", checkSessionAuth, async function (req, res, next) {
	res.render("diet/add");
});

router.post("/add", async function (req, res, next) {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	let diet = new Diet(req.body);
	await diet.save();
	res.redirect("/diet");
});
//delete
router.get("/delete/:id", checkSessionAuth, async function (req, res, next) {
	let diet = await Diet.findByIdAndDelete(req.params.id);
	res.redirect("/diet");
});
module.exports = router;
