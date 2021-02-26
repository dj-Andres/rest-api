const express = require("express");
const route = express.Router();
const Users = require("../controllers/user.controller");

route.get("/", Users.getUsers);

route.get("/:userId", Users.getUserbyId);

route.post("/", Users.createUser);

route.put("/:userId", Users.edit);

route.delete("/:userId", Users.deleteUser);

//const nodemailer=require('nodemailer');

module.exports = route;
