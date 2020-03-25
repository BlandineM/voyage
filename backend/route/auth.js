const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("../passport-startegies");
const { jwtSecret, saltRounds, connection } = require("../conf");
const bcrypt = require("bcrypt");
const router = express.Router();


router.post("/signup", (req, res) => {
  const formData = req.body;
  const hash = bcrypt.hashSync(formData.password, saltRounds);
  formData.password = hash;
  connection.query(
    `SELECT login 
    FROM users WHERE login = ?`,
    [formData.login],
    (err, results) => {
      if (err) return res.status(500).send("error");
      if (results.length) return res.status(409).send("email already used");
      connection.query(
        `INSERT INTO users
          SET ?
          `,
        formData,
        (err, results) => {
          if (err) {
            // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
            return res.status(500).send("Invalid User creation request");
          } else {
            // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
            const returnData = {
              id: results.insertId,
              login: formData.login
            };
            const token = jwt.sign(returnData, jwtSecret);
            return res.status(201).json({ returnData, token });
          }
        }
      );
    }
  );
});

router.post("/login", (req, res) => {
  passport.authenticate(
    "local",
    { session: false },
    (errAuth, user, infoAuth) => {
      if (errAuth)
        return res.status(500).json({
          tldr: "Tech error!",
          details: errAuth,
          message: infoAuth
        });
      if (!user)
        return res.status(401).json({
          tldr: "Form error!",
          details: "Either mail or password is incorrect",
          message: infoAuth
        });
      connection.query(
        `SELECT id, name, login, avatar
         FROM users
         WHERE id=?`,
        [user.id],
        (err, results) => {
          if (err) {
            // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
            res.status(500).send("Error in info of user");
          } else {
            // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
            const token = jwt.sign(user, jwtSecret);
            user.carData = results[0];
            return res.status(200).json({ user, token });
          }
        }
      );
    }
  )(req, res);
});

module.exports = router;