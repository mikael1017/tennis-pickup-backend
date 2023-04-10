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
		role: String,
	},
	{ collection: "userInfo" }
);

export default userSchema;
