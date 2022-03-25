const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;

const url =
  "mongodb+srv://nyanjasmin:puFFles0505.@cluster0.9wubz.mongodb.net/test";
const client = new MongoClient(url);
const dbName = "test";

client
  .connect()
  .then(() => console.log("berhasil connect ke mongodb"))
  .catch((err) => console.log("gagal connect ke mongodb"));

const db = client.db(dbName);
const User = db.collection("user");

app.use(express.json());

app.get("/user", async (req, res) => {
  console.log(UserModel);
  const users = await UserModel.find({});
  console.log(users);

  try {
    res.json({
      message: "berhasil yay",
      data: users,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.post("/user", async (req, res) => {
  const data = req.body;

  await User.insertOne(data);
  res.json({
    message: "berhasil input data",
    data: 1,
  });
});

app.listen(PORT, () => {
  console.log("server running on port ${PORT}");
});
