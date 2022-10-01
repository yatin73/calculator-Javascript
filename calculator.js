const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var operator = req.body.operator;
  if (operator == "add") {
    var result = parseInt(num1) + parseInt(num2);
  } else if (operator == "subtract") {
    var result = parseInt(num1) - parseInt(num2);
  } else if (operator == "Divide") {
    var result = parseInt(num1) / parseInt(num2);
  } else if (operator == "multiply") {
    var result = parseInt(num1) * parseInt(num2);
  } else {
    res.send("Select a valid operator");
  }

  res.send("The result of calculation is " + result);
});

app.listen(3000, function () {
  console.log("Server started on PORT 3000");
});
