const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoUrl =
  "mongodb+srv://mrbanerjeeofficial:NAADuhp7c7FzctL2@cluster0.sosbngs.mongodb.net/";

async function connect() {
  try {
    await mongoose.connect(mongoUrl);
    const connection = mongoose.connection;
    connection.on("connected", () =>
      console.log("mongodb connected successfully")
    );
    connection.on("error", (err) => {
      console.log("Failed to connect to MongoDB:", err);
      process.exit(1);
    });
  } catch (error) {
    console.log(error);
  }
}

connect();

// Define a simple schema and model for demonstration
const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});
const Item = mongoose.model("Item", itemSchema);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/data", async (req, res) => {
  // const newItem = new Item({ name: "Sample Item", quantity: 1 });
  // await newItem.save();

  // Retrieve all items from the database
  const items = await Item.find({});
  // console.log(items.data);
  res.json(items);
});

app.listen(3001, () => console.log("Server has started"));
