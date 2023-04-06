import { userModel } from "../../models/users/user-model.js";

export const findUsers = () => userModel.find();
export const createUser = (user) => userModel.create(user);
export const updateUser = (cid, user) =>
  userModel.updateOne({ _id: cid }, { $set: user });
