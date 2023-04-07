import mongoose from "mongoose";

const courtsSchema = mongoose.Schema(
	{
		_id: Number,
		index: String,
		street_name: String,
		city: String,
		state: String,
		zip: Number,
		type: String,
		count: Number,
		clay: Boolean,
		wall: Boolean,
		grass: Boolean,
		indoor: Boolean,
		lights: Boolean,
		proshop: Boolean,
		latitude: Number,
		longitude: Number,
	},
	{ collection: "tennisCourts" }
);

export default courtsSchema;
