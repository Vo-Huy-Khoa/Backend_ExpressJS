const Course = require("../models/Course");

const axios = require("axios");

class MeController {
  storedCourses(req, res) {
    Course.find({})
      .lean()
      .then((courses) => res.render("me/stored-courses", { courses }))
      .catch((err) => next(err));
  }
}

module.exports = new MeController();
