import mongoose from "mongoose";
import requestSchema from "./requets-schema.js";

const requestModel = mongoose.model("RequestModel", requestSchema);

export default requestModel;
