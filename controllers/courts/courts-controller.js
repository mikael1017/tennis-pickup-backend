import * as courtsDao from "./courts-dao.js";

const CourtsController = (app) => {
	app.get("/api/courts/city/:city", findCourtsByCity);
	app.get("/api/courts/state/:state", findCourtsByState);
	app.get("/api/courts/zip/:zip", findCourtsByZip);
	app.post("/api/courts", addCourt);
};

const findCourtsByCity = async (req, res) => {
	// console.log(req.params);
	const city = req.params["city"];
	// console.log(city);
	const courts = await courtsDao.findCourtsByCity(city);
	res.json(courts);
};

const findCourtsByZip = async (req, res) => {
	// console.log("finding by zip");
	const zip = req.params["zip"];
	const courts = await courtsDao.findCourtsByZip(zip);
	res.send(courts);
};

const findCourtsByState = async (req, res) => {
	const state = req.params["state"];
	const courts = await courtsDao.findCourtsByState(state);
	res.json(courts);
};

const addCourt = (req, res) => {
	const newCourt = req.body;
	courtsDao.addCourt(newCourt);
	res.sendStatus(200);
};

export default CourtsController;
