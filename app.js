import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
mongoose.connect(
  "mongodb+srv://jaewoo:wodn1017@cs6650.o3m9wao.mongodb.net/?retryWrites=true&w=majority"
);
const app = express();
console.log("Starting the server");
client.organization.search({ location: "Seattle, WA" }).then((response) => {
  console.log(response.data);
});
app.use(cors());
app.use(express.json());
// TuitsController(app);
// HelloController(app);
// UserController(app);

console.log("Started the server");

// app.listen(process.env.PORT || 4000);
