const { db } = require("../../repositories/mysql/getConnection")

async function getAllNotes() {
  let notes = await db.note.findAll({
    include: [{ model: db.user, as: "createdByUser" }],
    raw: true,
  })
  return notes
}

module.exports = { getAllNotes }
