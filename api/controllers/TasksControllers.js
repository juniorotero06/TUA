const TaskModel = require("../models/Task");

exports.getTasks = async (req, res) => {
  const pagination = {
    page: req.query.page ?? 1,
    limit: req.query.pageSize ?? 5,
    sort: {
      date: "desc",
    },
  };
  const tasks = await TaskModel.paginate({}, pagination);
  if (tasks.docs.length === 0) {
    res.status(404).send("No hay mas tareas");
  } else {
    res.status(200).send(tasks);
  }
};

exports.getTaskByUser = async (req, res) => {
  const pagination = {
    page: req.query.page ?? 1,
    limit: req.query.pageSize ?? 5,
    sort: {
      date: "desc",
    },
  };
  const tasks = await TaskModel.paginate(
    { userId: req.params.userId },
    pagination
  );
  if (tasks.docs.length === 0) {
    res.status(404).send("No hay mas tareas");
  } else {
    res.status(200).send(tasks);
  }
};

exports.createTask = async (req, res) => {
  const task = new TaskModel(req.body);
  try {
    const savedTask = await task.save();
    res.status(201).send(savedTask);
  } catch (error) {
    res.status(500).send(error);
  }
};
