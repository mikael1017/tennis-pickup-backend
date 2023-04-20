import mongoose from "mongoose";

const requestSchema = mongoose.Schema(
	{
		requestedUsername: String,
		requesteeUsername: String,
		date: String,
		time: String,
		matchType: String,
		skillLevel: String,
		court: String,
		lesson: String,
		isLesson: { type: Boolean, default: false },
	},
	{ collection: "matchRequests" }
);

export default requestSchema;
