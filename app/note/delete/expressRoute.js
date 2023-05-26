const express = require("express")
const router = express.Router()
const service = require("./service")

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id
    let notedDelete = await service.deleteNoteById(id)
    res.status(200).json(notedDelete)
  } catch (error) {
    res.status(500).json(error)
  }
})
