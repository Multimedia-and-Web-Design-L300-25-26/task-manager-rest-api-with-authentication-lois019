import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed");

    // During tests, avoid exiting the process so Jest can report failures
    if (process.env.NODE_ENV === "test") {
      throw error;
    }

    process.exit(1);
  }
};

export default connectDB;