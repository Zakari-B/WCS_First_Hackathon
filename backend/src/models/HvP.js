const AbstractManager = require("./AbstractManager");

class HvP extends AbstractManager {
  static table = "n2yo";

  insert(item) {
    return this.connection.query(
      `insert into ${HvP.table} (request_date, category_name, obslat, obslng, satid, satname, int_designator, launch_date, satlat, satlng, satalt) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        item.requestDate,
        item.categoryName,
        item.obsLat,
        item.obsLng,
        item.satId,
        item.satName,
        item.intDesignator,
        item.launchDate,
        item.satLat,
        item.satLng,
        item.satAlt,
      ]
    );
  }

  findLatest() {
    return this.connection.query(
      `select p.satid, p.category_name, p.satname, p.int_designator, p.launch_date, p.satlat, p.satlng, p.satalt, p.request_date from ${HvP.table} p inner join (select id, satid, satalt, max(request_date) as max_date from ${HvP.table} group by satid) m on p.satid = m.satid and p.request_date = m.max_date;`
    );
  }

  findCategoryBySatId() {
    return this.connection.query(
      `select distinct(satid), category_name from ${HvP.table} order by satid;`
    );
  }
}

module.exports = HvP;
