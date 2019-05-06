const router = require("express").Router();
const axios = require("axios");
const BASEURL = "https://www.googleapis.com/books/v1/volumes?";
const APIKEY = process.env.GOOGLE_BOOKS_API_KEY;

// Listen for a call to /api/search
router.get("/search", (req, res) => {
    // Grab the user's request
    const q = req.query.q;
    //  Set up URL with user request & hidden API Key
    const  searchAPI = BASEURL + q + APIKEY;

    axios
    .get(searchAPI)
    .then( (results  ) => console.log(results))
    .catch(err => res.status(422).json(err));
});
module.exports = router;