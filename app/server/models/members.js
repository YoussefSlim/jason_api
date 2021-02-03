//import the client sequelize
const sequelize = require("../database");

const { Model, DataTypes } = require("sequelize");

class Members extends Model {}

// we use the init method to configure Members
Members.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: "member",
  }
);

module.exports = Members;
