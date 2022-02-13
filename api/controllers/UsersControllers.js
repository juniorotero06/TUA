const UserModel = require("../models/User");

exports.getUsers = async (req, res) => {
  const pagination = {
    page: req.query.page ?? 1,
    limit: req.query.pageSize ?? 5,
    sort: {
      name: "asc",
    },
  };
  const users = await UserModel.paginate({}, pagination);
  if (users.docs.length === 0) {
    res.status(404).send("No hay mas usuarios");
  } else {
    res.status(200).send(users);
  }
};
