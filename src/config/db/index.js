const mongoose = require("mongoose");
const url = process.env.MONGO_URL;
// mongodb://localhost:27017/node

async function connect() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connect failed!");
  }
}

module.exports = { connect };
