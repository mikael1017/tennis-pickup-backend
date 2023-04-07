import requestModel from "./requets-model";

export const findCourtsByState = (state) => {
	console.log("findCourtsByState: " + state);
	courtsModel.find({ state: state });
};
export const findRequestsByCourt = (courtName) =>
	requestModel.find({ court: courtName });
export const postMatchRequest = (request) => requestModel.create(request);
export const deleteMatchRequest = (id) => requestModel.deleteOne({ _id: id });
export const updateMatchRequest = (id, request) =>
	requestModel.updateOne({ _id: id }, { $set: request });
