const express = require("express");
const { connection } = require("../conf");
const router = express.Router();

// Route of all destinations
router.get("/plage", (req, res) => {
  // Connection to the database and selection of information
  connection.query(
    `SELECT id, pays, mois_conseille_P, mois_deconseille_P
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
router.get("/plage/:id", (req, res) => {
  const id = req.params.id;
  // Connection to the database and selection of information
  connection.query(
    `SELECT id, pays, mois_conseille_P, mois_deconseille_P
      FROM destinations
    WHERE mois_conseille_P LIKE concat("%"?"%");`,
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
