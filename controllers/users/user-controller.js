// import posts from "./tuits.js";
import * as userDao from "../users/user-dao.js";

const findUsers = async (req, res) => {
  const users = await userDao.findUsers();
  res.json(users);
};

const createUser = async (req, res) => {
  const user = req.body;
  const newUser = await userDao.createUser(user);
  res.json(newUser);
};

const updateUser = async (req, res) => {
  const userIdToUpdate = req.params.uid;
  const updates = req.body;
  const status = await userDao.updateUser(userIdToUpdate, updates);
  res.json(status);
};

const UserController = (app) => {
  app.post("/api/users", createUser);
  app.get("/api/users", findUsers);
  app.put("/api/tuits/:tid", updateUser);
};

export default UserController;
