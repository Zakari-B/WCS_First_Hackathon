const db = require("./db");

exports.findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM `actions`")
    .then((result) => result[0]);
};

exports.findOne = (actionId) => {
  return db
    .promise()
    .query("SELECT * FROM `actions` WHERE id = ?", [actionId])
    .then(([result]) => result);
};

exports.addOne = (action) => {
  const { idPartie, playerName, hit, date } = action;
  return db
    .promise()
    .query(
      "INSERT INTO `actions` (idPartie, playerName, hit, date) VALUES (?, ?, ?, ?)",
      [idPartie, playerName, hit, date]
    )
    .then(([result]) => {
      return { id: result.insertId, idPartie, playerName, hit, date };
    });
};

exports.replaceOne = (actionId, action) => {
  const { idPartie, playerName, hit, date } = action;
  return db
    .promise()
    .query("UPDATE `actions` SET ? WHERE id = ?", [action, actionId])
    .then(([result]) => {
      return { id: actionId, ...action };
    });
};

exports.removeOne = (actionId) => {
  return db
    .promise()
    .query("DELETE FROM `actions` WHERE id = ?", [actionId])
    .then(([result]) => {
      if (result.affectedRows) {
        return true;
      } else {
        return false;
      }
    });
};
