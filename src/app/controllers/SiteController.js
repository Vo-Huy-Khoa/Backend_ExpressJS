const Courses = require("../models/Course");

class SiteController {
  index(req, res, next) {
    Courses.find({})
      .lean()
      .then((courses) => res.render("home", { courses }))
      .catch(next);
  }

}

module.exports = new SiteController();
