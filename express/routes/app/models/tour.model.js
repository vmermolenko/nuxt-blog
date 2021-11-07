module.exports = (sequelize, Sequelize) => {
  const Tour = sequelize.define("tours", {
    datestart: {
      type: Sequelize.DATEONLY
    },
    title: {
      type: Sequelize.STRING
    },
    team: {
      type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.STRING
    },
    img: {
      type: Sequelize.STRING
    },
    typetour: {
      type: Sequelize.STRING
    },
    typerus: {
      type: Sequelize.STRING
    },

  });

  return Tour;
};
