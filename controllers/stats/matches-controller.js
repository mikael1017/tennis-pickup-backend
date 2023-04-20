import * as matchesDao from "./matches-dao.js";

const ConfirmedMatchController = (app) => {
	app.post("/api/matches/confirmed/", confirmMatch);
	app.get(
		"/api/matches/confirmed/requestee/:requesteeUsername",
		getConfirmedMatchesByRequestee
	);
	app.get(
		"/api/matches/confirmed/requester/:requestedUsername",
		getConfirmedMatchesByRequester
	);
	app.delete("/api/matches/confirmed/:matchId", deleteConfirmedMatch);
};

const confirmMatch = async (req, res) => {
	const match = req.body;
	const status = await matchesDao.postConfirmedMatch(match);
	res.send(status);
};

const getConfirmedMatchesByRequestee = async (req, res) => {
	const requesteeUserName = req.params["requesteeUsername"];
	const requests = await matchesDao.getConfirmedMatchesByRequestee(
		requesteeUserName
	);
	res.json(requests);
};

const getConfirmedMatchesByRequester = async (req, res) => {
	const requestedUserName = req.params["requestedUsername"];
	const requests = await matchesDao.getConfirmedMatchesByRequester(
		requestedUserName
	);
	res.json(requests);
};

const deleteConfirmedMatch = async (req, res) => {
	const id = req.params["matchId"];
	console.log("hello");
	const status = await matchesDao.deleteConfirmedMatch(id);
	res.send(status);
};

export default ConfirmedMatchController;
