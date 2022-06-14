const express = require("express");
const path = require("path");

const app = express();
// get the public folder
app.use(express.static(path.resolve("./public")));

app.get("/", function (req, res) {
  res.send("Hello");
});

// if it is not in production default to the def port.
const PORT = process.env.PORT || 5002;

app.listen(PORT, function () {
  console.log("listening on port: ", PORT);
});
