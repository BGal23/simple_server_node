const express = require("express");
const path = require("path");
const app = express();

app.use((req, res, next) => {
  console.log("Nasze oprogramowanie pośredniczące");
  next();
});

app.get("/", function (req, res, next) {
  res.json({
    status: "Success!",
  });
});

app.get("/contact/:id", (req, res) => {
  res.send(`<h1>Contact 11</h1> Param: ${req.params.id}`);
});

app.listen(8080, function () {
  console.log("Listening!");
});
