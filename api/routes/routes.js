const router = require("express").Router();

//Require controllers modules
const LoginController = require("../controllers/LoginController");
const UsersController = require("../controllers/UsersControllers");

router.post("/login", LoginController.login);
router.post("/register", LoginController.register);
router.get("/users", UsersController.getUsers);

module.exports = router;
