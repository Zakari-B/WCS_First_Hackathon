const scoresDataAccess = require("../models/scoresDataAccess");

exports.getAll = (req, res) => {
  scoresDataAccess
    .findAll()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err));
};

exports.getOne = (req, res) => {
  const scoreId = req.params.id;
  scoresDataAccess
    .findOne(scoreId)
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
  scoresDataAccess
    .addOne(req.body)
    .then((info) => res.status(201).json(info))
    .catch((err) => res.status(500).send({ err }));
};

exports.updateOne = (req, res) => {
  const scoreId = req.params.id;
  scoresDataAccess
    .replaceOne(scoreId, req.body)
    .then((info) => res.status(201).json(info))
    .catch((err) => res.status(500).send({ err }));
};

exports.deleteOne = (req, res) => {
  const scoreId = req.params.id;
  scoresDataAccess
    .removeOne(scoreId)
    .then((info) => {
      if (info) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => res.status(500).send({ err }));
};
