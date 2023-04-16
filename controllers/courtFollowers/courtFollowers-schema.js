import mongoose from "mongoose";

const courtFollowersSchema = mongoose.Schema(
	{
		_id: String,
		courtId: String,
		followingPlayers: Array,
		followingCoaches: Array,
	},
	{ collection: "courtFollowers" }
);

export default courtFollowersSchema;
