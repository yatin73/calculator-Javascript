const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let result = null;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/data", function (req, res) {
  res.json(result);
});

app.get("/result", function (req, res) {
  res.sendFile(__dirname + "/result.html");
});

app.post("/result", function (req, res) {
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var operator = req.body.operator;
  if (operator == "add") {
    result = parseInt(num1) + parseInt(num2);
  } else if (operator == "subtract") {
    result = parseInt(num1) - parseInt(num2);
  } else if (operator == "Divide") {
    result = parseInt(num1) / parseInt(num2);
  } else if (operator == "multiply") {
    result = parseInt(num1) * parseInt(num2);
  } else {
    res.send("Select a valid operator");
  }
  res.redirect(202, "/result");
});

app.listen(3000, function () {
  console.log("Server started on PORT 3000");
});
