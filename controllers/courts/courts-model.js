import mongoose from "mongoose";
import courtsSchema from "./courts-schema.js";

const courtsModel = mongoose.model("CourtsModel", courtsSchema);

export default courtsModel;
