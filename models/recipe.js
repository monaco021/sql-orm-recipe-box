'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    }
  }, {});
  Recipe.associate = function(models) {
    Recipe.hasMany(models.Instruction, { foreignKey: 'recipeId' });
  };
  return Recipe;
};
