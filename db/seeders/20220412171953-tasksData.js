"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Tasks",
      [
        {
          taskTitle: "Get Wood",
          description: "Gnaw on some wood so we can create that 'Dam' Dam",
          projectId: 1,
          dueDate: new Date("2041-02-11"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskTitle: "C ontinue B uilding D am ",
          description: "Those Skunk thugs poured that there gas on our Dam and set it a blaze! ",
          projectId: 1,
          dueDate: new Date("2022-04-20"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskTitle: "Get Wood",
          description: "Gnaw on some wood so we can create that 'Dam' Dam",
          projectId: 1,
          dueDate: new Date("2022-04-20"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskTitle: "Get Wood",
          description: "Gnaw on some wood so we can create that 'Dam' Dam",
          projectId: 2,
          dueDate: new Date("2041-02-11"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskTitle: "Get Wood",
          description: "Gnaw on some wood so we can create that 'Dam' Dam",
          projectId: 3,
          dueDate: new Date("2041-02-11"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskTitle: "Get Wood",
          description: "Gnaw on some wood so we can create that 'Dam' Dam",
          projectId: 4,
          dueDate: new Date("2041-02-11"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskTitle: "Get Wood",
          description: "Gnaw on some wood so we can create that 'Dam' Dam",
          projectId: 5,
          dueDate: new Date("2041-02-11"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskTitle: " Wood",
          description: "Gnaw on some wood so we can create that 'Dam' Dam",
          projectId: 6,
          dueDate: new Date("2041-02-11"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskTitle: "Get Wood",
          description: "Gnaw on some wood so we can create that 'Dam' Dam",
          projectId: 2,
          dueDate: new Date("2041-02-11"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskTitle: "Get Wood",
          description: "Gnaw on some wood so we can create that 'Dam' Dam",
          projectId: 3,
          dueDate: new Date("2041-02-11"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskTitle: "Get Wood",
          description: "Gnaw on some wood so we can create that 'Dam' Dam",
          projectId: 4,
          dueDate: new Date("2041-02-11"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskTitle: "Get Wood",
          description: "Gnaw on some wood so we can create that 'Dam' Dam",
          projectId: 5,
          dueDate: new Date("2041-02-11"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          taskTitle: "Get Wood",
          description: "Gnaw on some wood so we can create that 'Dam' Dam",
          projectId: 6,
          dueDate: new Date("2041-02-11"),
          tag: "Urgent",
          taskContactId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Tasks", null, {});
  },
};
