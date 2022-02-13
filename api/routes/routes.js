const router = require("express").Router();

//Require controllers modules

const UsersController = require("../controllers/UsersControllers");
const TasksController = require("../controllers/TasksControllers");

router.get("/users", UsersController.getUsers);
router.get("/tasks", TasksController.getTasks);
router.get("/tasks/:userId", TasksController.getTaskByUser);

router.post("/tasks/store", TasksController.createTask);
module.exports = router;
