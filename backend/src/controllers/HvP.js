const models = require("../models");

class HvP {
  static getScores = (req, res) => {
    return models.n2yo
      .findLatest()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  static getAction = (req, res) => {
    return models.n2yo
      .findCategoryBySatId()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  static postScore = (req, res) => {
    return models.n2yo
      .findCategoryBySatId()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

module.exports = HvP;
