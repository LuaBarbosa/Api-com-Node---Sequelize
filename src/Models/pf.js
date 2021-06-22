const Sequelize = require("sequelize");
const sequelize = require("../DB/dataBase");

class PF extends Sequelize.Model {}
PF.init(
  {
    CPF: DataTypes.NUMBER,
    Nome: DataTypes.STRING,
    Email: DataTypes.STRING,
    Telefone: DataTypes.NUMBER,
    Nascimento: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "PF",
  }
);
sequelize.sync();
module.exports = PF;
