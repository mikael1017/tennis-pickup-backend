import mongoose from "mongoose";

const courtFollowersSchema = mongoose.Schema(
	{
		_id: String,
		courtId: String,
		followers: Array,
	},
	{ collection: "courtFollowers" }
);

export default courtFollowersSchema;
