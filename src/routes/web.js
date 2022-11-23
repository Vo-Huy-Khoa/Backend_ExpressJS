const siteRouter = require("./site");
const coursesRouter = require("./courses");
const meRouter = require("./me");
const apiRouter = require("./api");

function route(app) {
  app.use("/api", apiRouter);
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/search", siteRouter);

  app.use("/", meRouter);
}

module.exports = route;
