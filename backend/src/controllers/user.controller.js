const User = require("../models/user");
const validations = require("../lib/validations");
const Users = {};

Users.getUsers = async (req, res) => {
  await User.getAllUsers((err, users) => {
    if (err) throw err;
    if (users.length > 0) {
      res.status(200).json({
        succes: 1,
        data: users,
      });
    } else {
      res.json({
        succes: 0,
        message: "No existen registros",
      });
    }
  });
};

Users.getUserbyId = async (req, res) => {
  const { userId } = req.params;
  await User.getUserbyId(userId, (err, user) => {
    if (err) throw err;
    if (user.length > 0) {
      res.status(200).json({
        succes: 1,
        data: user,
      });
    } else {
      res.status(400).json({
        succes: 0,
        message: "No encontrado",
      });
    }
  });
};

Users.createUser = async (req, res) => {
  const { documento, nombres, email, celular } = req.body;

  const newUser = new User({ documento, nombres, email, celular });

  const { error } = validations.Schema.validate(req.body);

  if (error) {
    return res.status(404).json({
      error: error.details[0].message,
    });
  } else {
    try {
      const validate = [req.body.documento, req.body.email];

      await User.validate(validate, (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
          return res.json({
            success: 0,
            message: "El documento o email ya se encuentra registrado",
          });
        } else {
          User.createUser(newUser, (err, user) => {
            if (err) res.send(err);
            res.status(201).json({
              success: 1,
              message: "User created",
              data: user,
            });
          });
        }
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  }
};

Users.edit = async (req, res) => {
  const { userId } = req.params;
  await User.update(userId, new User(req.body), (err, result) => {
    if (err) res.send(err);
    res.status(204).json({
      succes: 1,
      message: "Update User",
      data: result,
    });
  });
};

Users.deleteUser = async (req, res) => {
  const { userId } = req.params;
  await User.remove(userId, (err, user) => {
    if (err) res.send(err);
    res.status(204).json({
      succes: 1,
      message: "El producto fue eliminado exitosamente",
      result: user,
    });
  });
};

module.exports = Users;
