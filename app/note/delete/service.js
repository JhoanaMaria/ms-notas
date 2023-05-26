const { db } = require("../../repositories/mysql/getConnection")

async function deleteNoteById(id) {
  let noteDelete = await db.note.destroy({
    where: { id },
  })
  return noteDelete
}

module.exports = { deleteNoteById }
