import * as courtFollowersDao from "./courtFollowers-dao.js";

const findCourtsById = async (req, res) => {
	// console.log(req.params);
	const id = req.params["id"];
	// console.log(city);
	const courtClubInfo = await courtFollowersDao.findCourtsById(id);
	res.json(courtClubInfo);
};

const addFollower = async (req, res) => {
	const courtId = req.params["id"];
	const follower = req.body.followerId;
	const data = await courtFollowersDao.addFollower(courtId, follower);

	res.json(data);
};

const deleteFollower = async (req, res) => {
	const courtId = req.params["id"];
	const follower = req.body.followerId;
	const data = await courtFollowersDao.deleteFollower(courtId, follower);
	res.json(data);
};

const CourtFollowersController = (app) => {
	app.get("/api/court/followers/:id", findCourtsById);
	app.post("/api/court/followers/:id", addFollower);
};

export default CourtFollowersController;
