module.exports = (sequelize, Sequelize) => {
  const Tour = sequelize.define("tours", {
    datestart: {
      type: Sequelize.DATEONLY,
      defaultValue: new Date()
    },
    title: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    team: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    amount: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    description: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    img: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    typetour: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    typerus: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    content: {
      type: Sequelize.JSON,
      defaultValue: [],
    },

  });

  return Tour;
};
