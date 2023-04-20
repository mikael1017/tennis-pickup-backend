import * as requestsDao from "./requests-dao.js";

const MatchRequestController = (app) => {
	app.post("/api/matches", postMatchRequest);
	app.delete("/api/matches/:matchId", deleteMatchRequest);
	app.put("/api/matches/:matchId", updateMatchRequest);
	app.get("/api/matches/requester/:requestedUsername", getRequestedMatches);
	app.get("/api/matches/requestee/:requesteeUsername", getRequesteeMatches);
};

const getRequestedMatches = async (req, res) => {
	const requestedUserName = req.params["requestedUsername"];
	const requests = await requestsDao.getRequestedMatches(requestedUserName);
	res.json(requests);
};

const getRequesteeMatches = async (req, res) => {
	const requesteeUserName = req.params["requesteeUsername"];
	const requests = await requestsDao.getRequesteeMatches(requesteeUserName);
	res.json(requests);
};
const postMatchRequest = async (req, res) => {
	const request = req.body;
	const status = requestsDao.postMatchRequest(request);
	res.send(status);
};

const deleteMatchRequest = async (req, res) => {
	const id = req.params["matchId"];
	const status = requestsDao.deleteMatchRequest(id);
	res.send(status);
};

const updateMatchRequest = async (req, res) => {
	const id = req.params["matchId"];
	const updates = req.body;
	const status = requestsDao.updateMatchRequest(id, updates);
	res.send(status);
};

export default MatchRequestController;
