const route = require("express").Router();

const Api = require("../app/api/ApiController");

route.get("/courses", Api.showCourse);
route.get("/courses/:id", Api.findCourse);
route.post("/courses/add", Api.createCourse);
route.put("/courses/:id/edit", Api.updateCourse);
route.delete("/courses/delete/:id", Api.deleteCourse);

module.exports = route;
