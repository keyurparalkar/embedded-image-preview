const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
	console.log("Requested Range = ", req.get("Range"));
	console.log(req.range());
	res.end();
});

app.get("/image", function (req, res) {
	res.sendFile(
		"/Users/keyurparalkar/Documents/Projects/embedded-image-preview/server/images/sample_1.jpg"
	);
});

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
