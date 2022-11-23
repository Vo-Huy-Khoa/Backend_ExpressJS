const siteRouter = require("./site");
const coursesRouter = require("./course");
const apiRouter = require("./api");
const UserRouter = require("./user");

function route(app) {
  app.use("/user", UserRouter);
  // app.use("/api", apiRouter);
  // app.use("/courses", coursesRouter);
  // app.use("/", siteRouter);
}

module.exports = route;
