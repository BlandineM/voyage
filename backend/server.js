const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const initScript = require("./initScript/initdb")

/* ------------------------------------------------------------ Tools */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/* -------------------------------------------------------------- Public Routes */

app.use("/", require("./route/type"));


initScript.initDb()
  .then(() => {
    app.listen(port, err => {
      if (err) {
        throw new Error("Something bad happened...");
      }
      console.log(`Server is listening on ${port}`);
    });

  }
  )
