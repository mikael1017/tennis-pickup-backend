import mongoose from "mongoose";

const matchesSchema = mongoose.Schema(
	{
		requestedUsername: String,
		requesteeUsername: String,
		date: String,
		time: String,
		matchType: String,
		skillLevel: String,
		court: String,
	},
	{ collection: "confirmedMatches" }
);

export default matchesSchema;
