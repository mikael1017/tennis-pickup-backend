import mongoose from "mongoose";

const requestSchema = mongoose.Schema(
	{
		_id: Number,
		court: String,
		requestedUserName: String,
		requesteeUserName: String,
		date: String,
		time: String,
		matchType: String,
		skillLevel: String,
	},
	{ collection: "matchRequests" }
);

export default requestSchema;
