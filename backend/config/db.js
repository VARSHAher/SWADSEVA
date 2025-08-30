const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://varshachowdhury4_db_user:xPgvfONMCcLlNQIR@varsha.fcmazeq.mongodb.net/Swadseva", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
