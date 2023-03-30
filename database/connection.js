const { MongoClient } = require("mongodb");

const url = "mongodb+srv://neel0390:1228neel@cluster1.ot2rsik.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

const insertToDB = async (data) => {
  try {
    const database = client.db("student");
    const collection = database.collection("information");
    await client.connect();
    const dbResponse = await collection.insertOne(data);
    return dbResponse;
  } catch (error) {
    console.log("Something Went Wrong");
    return error.message;
  }
};

const findInDB = async (query) => {
  try {
    const database = client.db("student");
    const collection = database.collection("information");
    await client.connect();
    const dbResponse = await collection.find(query).toArray();
    return dbResponse;
  } catch (error) {
    console.log("Something Went Wrong");
    return error.message;
  }
};

const updateDB = async () => {
  try {
    await client.connect();
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    const dbResponce = await collection.updateMany({ department: "HR" }, { $set: { salary: "45000" } });
    await client.close();
    return dbResponce;
  } catch (err) {
    return err.message;
  }
};

const deleteDB = async () => {
  try {
    await client.connect();
    const database = client.db("Human_Resource");
    const collection = database.collection("employee");
    const dbResponce = await collection.deleteMany({ lastCompany: "Y" });
    await client.close();
    return dbResponce;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  insertToDB,
  findInDB,
  updateDB,
  deleteDB,
};
