const db = require("../models");
const { tour: Tour } = db;

exports.getTursAll = (req, res) => {
  //const tours = await Tour.findAll();
  Tour.findAll().then(tour => {
    res.status(200).json(tour);
  })
};

exports.getTursById  = (req, res) => {
  const id = req.params.id;

  Tour.findByPk(id)
    .then(tour => {
      if (tour) {
        res.status(200).json(tour);
      } else {
        res.status(404).send({
          message: `Cannot find Tour with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tour with id=" + id
      });
    });
};

exports.getTursDeleteById  = (req, res) => {
  const id = req.params.id;

  Tour.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Tour was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete Tour with id=${id}. Maybe Tour was not found!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Could not delete Tour with id=" + id
    });
  });
};

exports.getTursUpdateById  = (req, res) => {
  const id = req.params.id;
  console.log(req);
  Tour.update(req.body, {
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "Tour was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Tour with id=${id}. Maybe Tour was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Tour with id=" + id
    });
  });
};

exports.setTour  = (req, res) => {
   // Create a Tutorial
  const tour = {
    title: 'Новый тур'
  };

  // Save Tutorial in the database
  Tour.create(tour)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
