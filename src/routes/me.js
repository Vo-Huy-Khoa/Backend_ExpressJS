const express = require("express");
const router = express.Router();

const MeController = require("../app/controllers/MeController");

router.get("/", MeController.storedCourses);

module.exports = router;
