// import dotenv
require("dotenv").config();

// import the class sequelize
const { Sequelize } = require("sequelize");

// client creation
const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    //allows you to write the names of the fields in a snacke_case
    underscored: true,
  },
});

// client module export
module.exports = sequelize;
