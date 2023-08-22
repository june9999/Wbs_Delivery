const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth");
const {
  register,
  login,
  logout,
  getLoggedinUser,
} = require("../controllers/auth");
router.post("/register", register);
router.post("/login", login); // POST email, password to http://localhost:8000/auth/login
router.post("/logout", logout);
router.get("/currentUser", authenticate, getLoggedinUser);

module.exports = router;
