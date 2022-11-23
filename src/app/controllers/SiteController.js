const Courses = require("../models/Course");

class SiteController {
  index(req, res, next) {
    Courses.find({})
      .lean()
      .then((courses) => res.render("home", { courses }))
      .catch(next);
  }
  show(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
