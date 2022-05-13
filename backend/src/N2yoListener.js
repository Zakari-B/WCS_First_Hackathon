const mysql = require("mysql2/promise");
const axios = require("axios").default;
const categories = require("./datas/categories");

const latArray = [-90, -45, 0, 45, 90];
const lonArray = [-120, -60, 0, 60, 120, 180];

function fetchN2yo(catIndex, latIndex, lonIndex, apiKey) {
  return axios
    .get(
      `https://api.n2yo.com/rest/v1/satellite/above/${latArray[latIndex]}/${lonArray[lonIndex]}/0/90/${categories[catIndex].id}/&apiKey=${apiKey}`
    )
    .then((res) => res);
}

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, N2YO_API_KEY } = process.env;
mysql
  .createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  })
  .then((connection) => {
    let categoriesIndex = 0;
    let latArrayIndex = 0;
    let lonArrayIndex = 0;

    connection
      .query(
        `select category_name, obslat, obslng from n2yo order by request_date desc limit 1`
      )
      .then((res) => {
        console.warn("res[0]", res[0]);
        if (res.length > 0) {
          categories.forEach((cat, catIndex) => {
            if (cat.name === res[0].category_name) categoriesIndex = catIndex;
          });

          latArray.forEach((lat, latIndex) => {
            if (lat === res[0].obslat) latArrayIndex = latIndex;
          });

          lonArray.forEach((lon, lonIndex) => {
            if (lon.name === res[0].obslng) lonArrayIndex = lonIndex;
          });
        }

        // retraiter res pour savoir ou démarrer
        setInterval(() => {
          if (categoriesIndex === categories.length - 1) {
            categoriesIndex = 0;
            if (latArrayIndex === latArray.length - 1) {
              latArrayIndex = 0;
              if (lonArrayIndex === lonArray.length - 1) lonArrayIndex = 0;
              else lonArrayIndex += 1;
            } else latArrayIndex += 1;
          } else categoriesIndex += 1;

          const currentDate = new Date();

          fetchN2yo(
            categoriesIndex,
            latArrayIndex,
            lonArrayIndex,
            N2YO_API_KEY
          ).then((resFetch) => {
            if (resFetch.data && !resFetch.data.error) {
              console.warn(
                "*** transaction count",
                resFetch.data.info.transactionscount,
                categories[categoriesIndex].name,
                latArray[latArrayIndex],
                lonArray[lonArrayIndex]
              );

              if (resFetch.data.above)
                resFetch.data.above.forEach((sat) => {
                  connection
                    .query(
                      `insert into n2yo (request_date, category_name, obslat, obslng, satid, satname, int_designator, launch_date, satlat, satlng, satalt) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                      [
                        currentDate,
                        categories[categoriesIndex].name,
                        latArray[latArrayIndex],
                        lonArray[lonArrayIndex],
                        sat.satid,
                        sat.satname,
                        sat.intDesignator,
                        new Date(
                          parseInt(sat.launchDate.split("-")[0], 10),
                          parseInt(sat.launchDate.split("-")[1], 10) - 1,
                          parseInt(sat.launchDate.split("-")[2], 10)
                        ),
                        sat.satlat,
                        sat.satlng,
                        sat.satalt,
                      ]
                    )
                    .then(() => {
                      connection
                        .query(
                          `select id, request_date from n2yo where satid=? order by request_date`,
                          [sat.satid]
                        )
                        .then((allDates) => {
                          if (allDates[0].length > 10) {
                            const toDelete = allDates[0].splice(
                              0,
                              allDates[0].length - 10
                            );

                            toDelete.forEach((item) => {
                              connection
                                .query(`delete from n2yo where id=?`, [item.id])
                                .then(() => {});
                            });
                            // console.warn(
                            //   `${toDelete.length} items from satid: ${sat.satid} deleted !`
                            // );
                          }
                          // else
                          //   console.warn(
                          //     `******* satellite ${sat.satid} is already clean !`
                          //   );
                        });
                    });
                });
            }
          });
        }, 5000);
      });
  });
