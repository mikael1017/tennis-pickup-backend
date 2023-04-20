import mongoose from "mongoose";
import matchesSchema from "./matches-schema.js";

const matchesModel = mongoose.model("MatchesModel", matchesSchema);

export default matchesModel;
