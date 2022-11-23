const express = require("express");
const route = express.Router();

const courseController = require("../app/controllers/CourseController");

//create new course
route.get("/create", courseController.create);
//redirect to the page create
route.post("/store", courseController.store);
//go to page edit
route.get("/:id/edit", courseController.edit);
//update course
route.put("/:id", courseController.update);
//delete course
route.delete("/:id", courseController.destroy);
//redirect to the page list
route.get("/:slug", courseController.show);

module.exports = route;
