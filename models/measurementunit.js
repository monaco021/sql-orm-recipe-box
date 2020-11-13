'use strict';

const { validator } = require("sequelize/types/lib/utils/validator-extras");

module.exports = (sequelize, DataTypes) => {
  const MeasurementUnit = sequelize.define('MeasurementUnit', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
  }, {});
  MeasurementUnit.associate = function(models) {
    MeasurementUnit.hasMany(models.Ingredient, { foreignKey: 'measurementUnitId' });
  };
  return MeasurementUnit;
};
