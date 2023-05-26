const express = require("express")
const router = express.Router()
const service = require("./service")

router.put("/:id", async (req, res) => {
  try {
    let note = req.body
    let id = req.params.id
    let noteUpdated = await service.updateNoteById(id, note)
    res.status(200).json(noteUpdated)
  } catch (error) {
    res.status(500).json(error)
  }
})
