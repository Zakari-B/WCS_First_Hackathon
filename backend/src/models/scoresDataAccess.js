const db = require("./db");

exports.findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM `scores`")
    .then((result) => result[0]);
};

exports.findOne = (scoreId) => {
  return db
    .promise()
    .query("SELECT * FROM `scores` WHERE id = ?", [scoreId])
    .then(([result]) => result);
};

exports.addOne = (score_) => {
  const { playerName, score, date } = score_;

  console.log(score_);

  return db
    .promise()
    .query(
      "INSERT INTO `scores` (playerName, score, date) VALUES (?, ?, ?)",
      [playerName, score, date]
    )
    .then(([result]) => {
      return { id: result.insertId, playerName, score, date };
    });
};

exports.replaceOne = (scoreId, score_) => {
  const { playerName, score, date } = score_;
  return db
    .promise()
    .query("UPDATE `scores` SET ? WHERE id = ?", [score, scoreId])
    .then(([result]) => {
      return { id: scoreId, ...score_ };
    });
};

exports.removeOne = (scoreId) => {
  return db
    .promise()
    .query("DELETE FROM `scores` WHERE id = ?", [scoreId])
    .then(([result]) => {
      if (result.affectedRows) {
        return true;
      } else {
        return false;
      }
    });
};
