import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		username: String,
		password: String,
		name: String,
		email: String,
		city: String,
		phoneNumber: String,
		skillLevel: String,
		followingCourts: Array,
		confirmedMatches: Array,
		followingMatches: Array,
		isAdmin: { type: Boolean, default: false },
		role: {
			type: String,
			default: "player",
			enum: ["admin", "player", "organization", "coach"],
		},
	},
	{ collection: "userInfo" }
);

export default userSchema;
