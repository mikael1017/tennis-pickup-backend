import { userModel } from "../../models/users/user-model.js";

export const findUsers = () => userModel.find();
export const createUser = (user) => userModel.create(user);
export const updateUser = (uid, user) =>
  userModel.updateOne({ _id: uid }, { $set: user });
