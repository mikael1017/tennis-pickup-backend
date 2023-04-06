import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import CourtsController from "./controllers/courts/courts-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
mongoose.connect(
  "mongodb+srv://jaewoo:wodn1017@cs6650.o3m9wao.mongodb.net/tennis?retryWrites=true&w=majority"
);
const app = express();
console.log("Starting the server");
app.use(cors());
app.use(express.json());
CourtsController(app);
console.log("Started the server");

app.listen(process.env.PORT || 4000);
