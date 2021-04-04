'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('animals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      latitude: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      longitude: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      descricao: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      data: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      id_usuario: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('animals');
  }
};