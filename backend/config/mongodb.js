import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DATABASE CONNECTED");
  } catch (error) {
    console.error("DB CONNECTION FAILED:", error.message);
  }
};

export default connectDB;
