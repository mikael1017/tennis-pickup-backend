import courtsModel from "./courts-model.js";

export const findCourtsByState = async (state) => {
	console.log("findCourtsByState: " + state);
	return courtsModel.find({ state: state });
};

export const findCourtsByCity = async (city) =>
	courtsModel.find({ city: city });

export const findCourtsByZip = async (zip) => {
	return courtsModel.find({ zip: zip });
};

export const addCourt = async (court) => courtsModel.create(court);

export const updateCourt = async (cid, court) =>
	await courtsModel.updateOne({ _id: cid }, { $set: court });
