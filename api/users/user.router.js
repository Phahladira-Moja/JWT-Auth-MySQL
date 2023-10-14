const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
} = require("./user.controller.js");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation.js");

router.get("/", checkToken, getUsers);
router.post("/", checkToken, createUser);
router.patch("/", checkToken, updateUser);
router.delete("/", checkToken, deleteUser);
router.get("/:id", checkToken, getUserById);
router.post("/login", login);

module.exports = router;
