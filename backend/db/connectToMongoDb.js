import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const connectToMongoDb = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

export default connectToMongoDb;

