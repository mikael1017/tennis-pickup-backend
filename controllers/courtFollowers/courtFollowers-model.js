import mongoose from "mongoose";
import courtFollowersSchema from "./courtFollowers-schema.js";

const courtFollowersModel = mongoose.model(
	"CourtFollowersModel",
	courtFollowersSchema
);

export default courtFollowersModel;
