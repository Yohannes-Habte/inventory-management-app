import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import colors from 'colors';


// Express app
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://inventory-management-app'],
    credentials: true,
  })
);
app.use(express.json());

dotenv.config();

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('DB is connected!'.yellow.bold);
  } catch (error) {
    console.log(error);
  }
};

app.use(morgan('tiny'));

app.get("/user", (req, res) => {
    res.send("Habtemariam")
})

// Port
const port = process.env.PORT || 8000;

// Server Listner
app.listen(port, () => {
  console.log(`The server starts on port ${port}`.blue.bold);
});