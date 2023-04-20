import matchesModel from "./matches-model.js";

export const postConfirmedMatch = async (request) =>
	await matchesModel.create(request);

export const deleteConfirmedMatch = async (id) =>
	await matchesModel.deleteOne({ _id: id });

export const getConfirmedMatchesByRequester = async (requestedUsername) =>
	await matchesModel.find({ requestedUsername: requestedUsername });

export const getConfirmedMatchesByRequestee = async (requesteeUsername) =>
	await matchesModel.find({ requesteeUsername: requesteeUsername });
