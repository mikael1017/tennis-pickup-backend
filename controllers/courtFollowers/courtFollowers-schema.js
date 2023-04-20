import mongoose from "mongoose";

const courtFollowersSchema = mongoose.Schema(
	{
		_id: String,
		courtId: String,
		followingPlayers: Array,
		followingCoaches: Array,
		followers: Array,
		organization: String,
	},
	{ collection: "courtFollowers" }
);

export default courtFollowersSchema;
