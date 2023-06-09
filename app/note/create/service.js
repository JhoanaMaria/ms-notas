const { db } = require("../../repositories/mysql/getConnection")

async function createNote(data) {
  data.statusUpdatedAt = Date.now()
  let note = await db.note.create(data)
  return JSON.parse(JSON.stringify(note))
}

module.exports = {createNote}