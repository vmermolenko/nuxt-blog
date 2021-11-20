const { authJwt } = require("../middleware");
const controller = require("../controllers/tour.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    // res.header(
    //   "Access-Control-Allow-Headers",
    //   "x-access-token, Origin, Content-Type, Accept"
    // );
    next();
  });

  app.post("/api/turs", controller.setTour);
  app.get("/api/turs/all", controller.getTursAll);
  app.get("/api/turs/:id", controller.getTursById);
  app.delete("/api/turs/:id", controller.getTursDeleteById);
  app.put("/api/turs/:id", controller.getTursUpdateById);
};
