const { db } = require("../../repositories/mysql/getConnection")

async function getUserById(id) {
  return db.user.findByPk(id, { raw: true })
}

module.exports = { getUserById }
