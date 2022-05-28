'use strict';
//module yang diimport
const { hashPassword } = require("../helpers/bcrypt");
const fs = require('fs')

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync('./user.json', 'utf-8'))
    data.forEach(e => {
      e.password = hashPassword(e.password)
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Users', data, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
