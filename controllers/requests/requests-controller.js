import * as requestsdao from "./requests-dao.js";

const matchrequestscontroller = (app) => {
	app.get("/api/requests/court/:court", findrequestsbycourt);
	app.post("/api/requests", postmatchrequest);
	app.delete("/api/requests/:matchid", deletematchrequest);
	app.put("/api/requests/:matchid", updatematchrequest);
};

const findrequestsbycourt = async (req, res) => {
	const courtname = req.params["court"];
	const courts = await requestsdao.findrequestsbycourt(courtname);
	res.json(courts);
};

const postmatchrequest = async (req, res) => {
	const request = req.body;
	const status = requestsdao.postmatchrequest(request);
	res.send(status);
};

const deletematchrequest = async (req, res) => {
	const id = req.params["matchid"];
	const status = requestsdao.deletematchrequest(id);
	res.send(status);
};

const updatematchrequest = async (req, res) => {
	const id = req.params["matchid"];
	const updates = req.body;
	const status = requestsdao.updatematchrequest(id, updates);
	res.send(status);
};

export default matchrequestscontroller;
