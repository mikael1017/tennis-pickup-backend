import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import CourtsController from "./controllers/courts/courts-controller.js";
import session from "express-session";
import SessionController from "./controllers/users/session-controller.js";
import UserController from "./controllers/users/user-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
mongoose.connect(
	"mongodb+srv://jaewoo:wodn1017@cs6650.o3m9wao.mongodb.net/tennis?retryWrites=true&w=majority"
);
const app = express();
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:3000",
	})
);
app.use(express.json());
app.use(
	session({
		secret: "process.env.SECRET",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
		// this needs to be true when we deploy to production
		// otherwise, local
	})
);

if (process.env.ENV === "production") {
	app.set("trust proxy", 1); // trust first proxy
	session.cookie.secure = true; // serve secure cookies
}
SessionController(app);
UserController(app);
CourtsController(app);
console.log("Started the server");

app.listen(process.env.PORT || 4000);
