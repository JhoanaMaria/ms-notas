const { db } = require("../../repositories/mysql/getConnection")

async function updateNoteById(id, note) {
  let noteUpdated = await db.note.update(note, {
    where: { id },
  })
  return noteUpdated
}

module.exports = { updateNoteById }
