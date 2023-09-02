'use strict';

module.exports = {
  // up: async (queryInterface, Sequelize) => {
  //   /**
  //    * Add seed commands here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkInsert('People', [{
  //    *   name: 'John Doe',
  //    *   isBetaMember: false
  //    * }], {});
  //   */
  // },

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'John',
      lastName: 'Doe',
      address: 'USA@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
