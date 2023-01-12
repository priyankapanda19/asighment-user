//-----------------------      Importing required modules and packages       ----------------------------//
const express= require("express");
const router = express.Router();

const userController = require("../controller/userController");



//-----------------------       user Api 1       ---------------------------->>>>>>>>>>>
router.post("/register", userController.createUser);                                                            





module.exports= router;