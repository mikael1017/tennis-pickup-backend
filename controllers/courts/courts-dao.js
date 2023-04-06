import courtsModel from "./courts-model.js";

export const findCourtsByState = (state) => {
  console.log("findCourtsByState: " + state);
  courtsModel.find({ state: state });
};
export const findCourtsByCity = (city) => courtsModel.find({ city: city });
export const findCourtsByZip = (zip) => courtsModel.find({ zip: zip });
export const addCourt = (court) => courtsModel.create(court);
export const updateCourt = (cid, court) =>
  courtsModel.updateOne({ _id: cid }, { $set: court });
