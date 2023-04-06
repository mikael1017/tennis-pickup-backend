import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    name: String,
    email: String,
    location: String,
    courts: Array,
  },
  { collection: "userInfo" }
);

export default userSchema;
