const scoresDataAccess = require("../models/scoresDataAccess");

exports.getAll = (req, res) => {
    scoresDataAccess
    .findAll()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
};

exports.getOne = (req, res) => {
  const studentId = req.params.id;
  scoresDataAccess
    .findOne(studentId)
    .then((student) => {
      if (student.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(student[0]);
      }
    })
    .catch((err) => res.status(500).send(err));
};

exports.createOne = (req, res) => {
  const { lastname, firstname, age, campus } = req.body;
  scoresDataAccess
      .addOne(req.body)
      .then((info) => res.status(201).json(info))
      .catch((err) => res.status(500).send({ err }));
};

exports.updateOne = (req, res) => {
  const studentId = req.params.id;
  const { lastname, firstname, age, campus } = req.body;
  scoresDataAccess
      .replaceOne(studentId, req.body)
      .then((info) => res.status(201).json(info))
      .catch((err) => res.status(500).send({ err }));
};

exports.deleteOne = (req, res) => {
  const studentId = req.params.id;

  scoresDataAccess
    .removeOne(studentId)
    .then((info) => {
      if (info) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => res.status(500).send({ err }));
};