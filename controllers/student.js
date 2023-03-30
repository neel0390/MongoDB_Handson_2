const mongoclient = require("../database/connection");

const studentEnrollment = async (req, res) => {
  const studentData = req.body;
  try {
    const result = await mongoclient.insertToDB(studentData);
    console.log("The result of database Oeration =>", result);

    return res.status(200).send(result);
  } catch (error) {
    console.log("Something Went Wrong While Performing db Operations");
    return res.status(500).send({ message: "Something Went Wrong While Performing db Operations" });
  }
};

const studentFind = async (req, res) => {
  const queryParam = req.query;
  console.log(queryParam);
  try {
    const result = await mongoclient.findInDB(queryParam);
    console.log("The result of database Oeration =>", result);

    return res.status(200).send(result);
  } catch (error) {
    console.log("Something Went Wrong While Performing db Operations");
    return res.status(500).send({ message: "Something Went Wrong While Performing db Operations" });
  }
};

const updateStudentData = async (req, res) => {
  try {
    const result = await mongodb.updateDB();
    console.log("The result of database Oeration =>", result);
    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong whlie calling db Operation");
  }
};

const deleteStudentData = async (req, res) => {
  try {
    const result = await mongodb.deleteDB();
    console.log("The result of database Oeration =>", result);
    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong whlie calling db Operation");
  }
};

module.exports = { studentEnrollment, studentFind, updateStudentData, deleteStudentData };
