const router = require("express").Router();
const { User, validate } = require("../models/user");



router.get("/main", async (req, res) => {
    try {
	  const manager = await User.find()
	  res.json(user)
	} catch (error) {
		res.json({message: error})
	}
});


module.exports = router;