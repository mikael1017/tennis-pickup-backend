import courtFollowersModel from "./courtFollowers-model.js";

export const findCourtsById = async (id) => {
	return await courtFollowersModel.find({ _id: id });
};

export const addFollower = async (courtId, follower) => {
	const data = await courtFollowersModel.findOne({ _id: courtId });

	if (!data) {
		courtFollowersModel.create({ _id: courtId, followers: [follower] });
	} else {
		if (!data.followers.includes(follower)) {
			data.followers.push(follower);
		}
		await data.save();
	}
};

export const deleteFollower = async (courtId, follower) => {
	const data = await courtFollowersModel.findOneAndUpdate(
		{ _id: courtId },
		{ $pull: { followers: follower } },
		{ new: true },
		(err, doc) => {
			if (err) {
				console.log("Something wrong when updating data!");
			}
			console.log(doc);
		}
	);
	return data;
};
