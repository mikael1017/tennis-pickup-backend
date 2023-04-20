import * as requestsDao from "./requests-dao.js";

const MatchRequestController = (app) => {
	app.post("/api/matches", postMatchRequest);
	app.delete("/api/matches/:matchId", deleteMatchRequest);
	app.put("/api/matches/:matchId", updateMatchRequest);
};

const findrequestsbycourt = async (req, res) => {
	const courtname = req.params["court"];
	const courts = await requestsDao.findrequestsbycourt(courtname);
	res.json(courts);
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
