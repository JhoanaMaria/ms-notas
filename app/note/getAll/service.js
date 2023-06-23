const { db } = require("../../repositories/mysql/getConnection")

async function getAllNotes({ orderByStatus }) {
  let notes

  if (orderByStatus) {
    notes = await db.note.findAll({
      order: [["status", orderByStatus]],
      include: [
        { model: db.user, as: "createdByUser" },
        { model: db.status, as: "statusStatus" },
      ],
      raw: true,
    })
  } else {
    notes = await db.note.findAll({
      include: [{ model: db.user, as: "createdByUser" }],
      raw: true,
    })
  }

  return notes
}

module.exports = { getAllNotes }