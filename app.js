import express from "express";
// import HelloController from "./controllers/hello-controller.js";
// import UserController from "./controllers/users/users-controller.js";
// import TuitsController from "./controllers/tuits/tuits-controller.js";
// import cors from "cors";
import mongoose from "mongoose";
import petfinder from "@petfinder/petfinder-js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const API_KEY = "p5qbixFfDUCj1jXzbDKQgKtfkEQ8N3a26Ag5ONKj7N5EbS4KNq";
const SECRET_KEY = "amiQrkafY2MPAliGerxFRp251GYuyTMROk0mmQ2Y";
const client = new petfinder.Client({ apiKey: API_KEY, secret: SECRET_KEY });

mongoose.connect(
  "mongodb+srv://jaewoo:wodn1017@cs6650.o3m9wao.mongodb.net/?retryWrites=true&w=majority"
);
const app = express();
console.log("Starting the server");
client.organization.search({ location: "Seattle, WA" }).then((response) => {
  console.log(response.data);
});
// app.use(cors());
// app.use(express.json());
// TuitsController(app);
// HelloController(app);
// UserController(app);

console.log("Started the server");

// app.listen(process.env.PORT || 4000);
