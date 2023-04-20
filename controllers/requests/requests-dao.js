import requestModel from "./requets-model.js";
import mongoose from "mongoose";

export const findRequestsByCourt = async (courtName) =>
	requestModel.find({ court: courtName });

export const postMatchRequest = async (request) =>
	await requestModel.create(request);

export const deleteMatchRequest = async (id) => {
	console.log(id);
	const result = await requestModel.deleteOne({ _id: id });
};

export const updateMatchRequest = async (id, request) =>
	await requestModel.updateOne({ _id: id }, { $set: request });

export const getRequestedMatches = async (requestedUsername) =>
	await requestModel.find({ requestedUsername: requestedUsername });

export const getRequesteeMatches = async (requesteeUsername) =>
	await requestModel.find({ requesteeUsername: requesteeUsername });
