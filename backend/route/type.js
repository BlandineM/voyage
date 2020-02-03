const express = require("express");
const { connection } = require("../conf");
const router = express.Router();

function sqlNameByType(type) {
  if (type === "plage") {
    return "P";
  } else {
    return "M";
  }
}

// Route of all destinations
router.get("/:type", (req, res) => {
  const type = req.params.type;
  const sqlName = sqlNameByType(type);
  // Connection to the database and selection of information
  connection.query(
    `SELECT id, pays, mois_conseille_${sqlName}, mois_deconseille_${sqlName}
    FROM destinations`,
    (err, results) => {
      if (err) {
        // If an error has occurred, then the user is informed of the error
        res.status(500).send("Error in destination beaches");
      }

      res.json(results);
    }
  );
});
// Route of all destinations for the chosen month
router.get("/:type/:id", (req, res) => {
  const type = req.params.type;
  const id = req.params.id;
  const sqlName = sqlNameByType(type);
  // Connection to the database and selection of information
  connection.query(
    `SELECT id, pays, mois_conseille_${sqlName}, mois_deconseille_${sqlName}
      FROM destinations
    WHERE mois_conseille_${sqlName} LIKE concat("%"?"%");`,
    id,
    (err, results) => {
      if (err) {
        // If an error has occurred, then the user is informed of the error
        res
          .status(500)
          .send("Error in destination beaches for the chosen month");
      }

      res.json(results);
    }
  );
});

// Route of all destinations for the chosen month
router.get("/:type/wrong/:id", (req, res) => {
  const type = req.params.type;
  const id = req.params.id;
  const sqlName = sqlNameByType(type);
  // Connection to the database and selection of information
  connection.query(
    `SELECT id, pays, mois_conseille_${sqlName}, mois_deconseille_${sqlName}
      FROM destinations
    WHERE mois_deconseille_${sqlName} LIKE concat("%"?"%");`,
    id,
    (err, results) => {
      if (err) {
        // If an error has occurred, then the user is informed of the error
        res
          .status(500)
          .send("Error in destination beaches for the chosen month");
      }

      res.json(results);
    }
  );
});
module.exports = router;
