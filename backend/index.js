import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors middleware
app.use(cors());

//db connection
connectDB();

//routes
app.get("/", (req, res) => {
  res.send("api is running ");
});

//start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
