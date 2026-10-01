'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("messages", {
      // messages properites definition
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      sender: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      receiver: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      message: {
        type: Sequelize.TEXT,      // varchar 255
        allowNull: true
      },
      file: {
        type: Sequelize.JSON,     // string json
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: "inactive"            // active => unseen, inactive => read
      },
      deletedStatus: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      messageId: {
        type: Sequelize.UUID,
        references: {
          model: "messages",
          key: "id",
          // onUpdate: "",
          onDelete: "NO ACTION"
        },
        allowNull: true
      }, // reply
      reactions: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE, 
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        type: Sequelize.DATE, 
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        onUpdate: Sequelize.literal("CURRENT_TIMESTAMP")
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("messages")
  }
};
