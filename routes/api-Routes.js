const router = require("express").Router();
const axios = require("axios");

// Book routes
router.use("/pull", (reg, res) => {
    console.log("this is a test");
    axios
    .get("http://www.recipepuppy.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;