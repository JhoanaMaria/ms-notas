const { db } = require("../../repositories/mysql/getConnection")

async function updateNoteById(id, note) {
  let savedNote = db.note.findByPk(id, { raw: true })

  if (savedNote.status !== note.status) {
    note.statusUpdatedAt = Date.now()
  }

  let noteUpdated = await db.note.update(note, {
    where: { id },
  })
  return noteUpdated
}

module.exports = { updateNoteById }