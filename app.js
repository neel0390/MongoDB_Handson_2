const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const { studentEnrollment, studentFind } = require("./controllers/student");

app.use(bodyparser.json());
app.use(studentEnrollment);
app.use(studentFind);

app.listen(7000, () => {
  console.log("server is running on 7000");
});
