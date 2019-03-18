const db = require("../models");

// Defining methods for the booksController
module.exports = {
	findAll: function(req, res) {
		console.log("Query String Text: " + req.query);
		axios
    .get("https://www.googleapis.com/books/v1/volumes?", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
	}
}