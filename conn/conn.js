

const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://snehr63:4OKTF6WzxxbfMQgi@cluster0.w1ulb.mongodb.net/",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

conn();
