import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import colors from "colors";

// Routers
import authRouter from "./routes/authsRoutes.js";
import userRouter from "./routes/userRoutes.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";

// Express app
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://inventory-management-app"],
    credentials: true,
  })
);
app.use(express.json());

dotenv.config();

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB is connected!".yellow.bold);
  } catch (error) {
    console.log(error);
  }
};

app.use(morgan("tiny"));

// End Points
app.use("/api/auths", authRouter);
app.use("/api/users", userRouter);

// Static assets
app.use(express.static("assets"));

// Global error handler
app.use(globalErrorHandler);

// Port
const port = process.env.PORT || 4000;

// Server Listner
app.listen(port, () => {
  connectToMongoDB();
  console.log(`The server starts on port ${port}`.blue.bold);
});
