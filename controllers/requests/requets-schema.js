import mongoose from "mongoose";

const requestSchema = mongoose.Schema(
	{
		requestedUserName: String,
		requesteeUserName: String,
		date: String,
		time: String,
		matchType: String,
		skillLevel: String,
		court: String,
	},
	{ collection: "matchRequests" }
);

export default requestSchema;
