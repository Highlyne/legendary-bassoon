const router = require("express").Router();
const axios = require("axios");
const BASEURL = "https://www.googleapis.com/books/v1/volumes?";
const APIKEY = process.env.GOOGLE_BOOKS_API_KEY;
const PARAMETER = "&fields=items";

// Listen for a call to /api/search
router.get("/search", (req, res) => {
    // Grab the user's request
    const q = req.query.q;
    //  Set up URL with user request & hidden API Key
    const  searchAPI = BASEURL + q + APIKEY + PARAMETER;

    axios
    .get(searchAPI)
    .then( (response ) => res.json(response.data))
    .catch(err => res.status(422).json(err));
});
module.exports = router;