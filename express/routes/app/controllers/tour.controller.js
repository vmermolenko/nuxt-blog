const db = require("../models");
const { tour: Tour } = db;

exports.getTursAll = (req, res) => {
  //const tours = await Tour.findAll();
  Tour.findAll().then(tour => {
    res.status(200).json(tour);
  })
};

exports.tursId = (req, res) => {
  res.status(200).send("Id turs.");
};
