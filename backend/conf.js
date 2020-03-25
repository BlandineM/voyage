require("dotenv").config();
const mysql = require("mysql");
const cloudinary = require('cloudinary').v2;

const connection = mysql.createConnection({
  host: process.env.HOST || "totost", // adresse du serveur
  user: process.env.DBUSER || "toto", // le nom d'utilisateur
  password: process.env.PASSWORD || "t0t0", // le mot de passe
  database: process.env.DATABASE || "toto-DB" // le nom de la base de données
});
const jwtSecret = process.env.JWT_SECRET || "jwt_please_change";
const saltRounds = parseInt(process.env.SALT_ROUNDS) || "20"; // nombre de hachage du mot de passe

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || 'toto',
  api_key: process.env.CLOUDINARY_API_KEY || 'totoApiKey',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'totoApiKeySecret'
});

module.exports = { connection, cloudinary, jwtSecret, saltRounds };
