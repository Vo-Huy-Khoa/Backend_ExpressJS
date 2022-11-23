const Course = require("../models/Course");

class ApiController {
  async showCourse(req, res, next) {
    try {
      await Course.find({})
        .lean()
        .then((courses) => res.json(courses))
        .catch(next);
    } catch (error) {
      res.status(404).json({ error: "Not found!" });
    }
  }

  async findCourse(req, res, next) {
    try {
      await Course.findOne({ id: req.params.id })
        .lean()
        .then((course) => res.json(course))
        .then((res) => res.json(res))
        .catch(next);
    } catch (error) {
      res.status(404).json({ error: "Not found!" });
    }
  }

  async createCourse(req, res, next) {
    try {
      const course = new Course(req.body);
      await course
        .save()
        .then(() => res.json(course))
        .catch(next);
    } catch (error) {
      res.status(404).json({ error: "Create Fail!" });
    }
  }

  async updateCourse(req, res, next) {
    try {
      await Course.updateOne({ id: req.params }, req.body)
        .then(() => res.json({ message: "Update success!" }))
        .catch(next);
    } catch (error) {
      res.status(404).json({ error: "Update Fail!" });
    }
  }

  async deleteCourse(req, res, next) {
    try {
      await Course.deleteOne({ id: req.params.id })
        .then(() => res.json({ message: "Delete success!" }))
        .catch(next);
    } catch (error) {
      res.status(404).json({ error: "Delete Fail!" });
    }
  }
}

module.exports = new ApiController();
