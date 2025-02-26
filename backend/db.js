const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/finexa");
    console.log("DB connected successfully");
  } catch (error) {
    console.error("Something went wrong: " + error.message);
    process.exit(1); // Exit process if connection fails
  }
};

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
  },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = { connectDb, User };
