const express = require("express")
const router = express.Router()
const { getAllNotes } = require("./service")

//Express route for get all notes
router.get("/", async (req, res) => {
  try {
    const orderByStatus = req.query.orderByStatus
    let notes = await getAllNotes({ orderByStatus })

    res.json(notes)
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router
