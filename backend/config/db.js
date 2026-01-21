import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("mongo DB Connected");
  } catch (error) {
    console.error("Mongo DB connection Failed:", error);
    process.exit(1);
  }
};
export default connectDB;
