import * as courtFollowersDao from "./courtFollowers-dao.js";

const findCourtFollowersById = async (req, res) => {
	// console.log(req.params);
	const id = req.params["id"];
	// console.log(city);
	const courtClubInfo = await courtFollowersDao.findCourtFollowersById(id);
	res.json(courtClubInfo);
};

const addFollower = async (req, res) => {
	const courtId = req.params["id"];
	const follower = req.body.followerId;
	const data = await courtFollowersDao.addFollower(courtId, follower);

	res.json(data);
};

const updateFollower = async (req, res) => {
	const courtId = req.params["id"];
	const follower = req.body.followerId;
	const data = await courtFollowersDao.deleteFollower(courtId, follower);
	res.json(data);
};
const deleteFollower = async (req, res) => {
	const courtId = req.params["clubId"];
	const follower = req.params["followerId"];
	const data = await courtFollowersDao.deleteFollower(courtId, follower);
	res.json(data);
};

const CourtFollowersController = (app) => {
	app.get("/api/court/followers/:id", findCourtFollowersById);
	app.post("/api/court/followers/:id", addFollower);
	app.put("/api/court/followers/:id", updateFollower);
	app.delete("/api/court/followers/:clubId/:followerId", deleteFollower);
};

export default CourtFollowersController;
