const express = require("express")
const router = express.Router()
const { createNote } = require("./service")

//Express route for creating a new note
router.post("/", async (req, res) => {
  try {
    let data = req.body
    let note = await createNote(data)
    res.json(note)
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router
