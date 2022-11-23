const Course = require("../models/Course");
const axios = require("axios");

class CourseController {
  //render data from database Course
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render("courses/show", { course });
      })
      .catch(next);
  }

  //render data from API
  // show(req, res, next) {
  //   axios
  //     .get("http://localhost:3001/api/courses/")
  //     .then((response) => res.json(response.data))
  //     .then((courses) => res.render("courses/show", { courses }))
  //     .catch((err) => next(err));
  // }

  //redirect to the page create
  create(req, res, next) {
    res.render("courses/create");
  }

  //store data to database
  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }

  //create new course and store to API
  // store(req, res, next) {
  //   axios
  //     .post("http://localhost:3001/api/courses/add", req.body)
  //     .then(() => res.redirect("/"))
  //     .catch(next);
  // }

  //go to page edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .lean()
      .then((course) => res.render("courses/edit", { course }))
      .catch(next);
  }

  //update course to database
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/"))
      .catch(next);
  }

  //delete course to database
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new CourseController();
