'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      pedido.belongsTo(models.cliente);
      pedido.belongsTo(models.servico);
    }
  };
  pedido.init({
    idCliente: DataTypes.STRING,
    idServico: DataTypes.STRING,
    valor: DataTypes.FLOAT(6,2),
    data: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return pedido;
};