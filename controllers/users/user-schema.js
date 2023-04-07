import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    name: String,
    email: String,
    location: String,
    followingCourts: Array,
    confirmedMatches: Array,
    followingMatches: Array,
  },
  { collection: "userInfo" }
);

export default userSchema;
