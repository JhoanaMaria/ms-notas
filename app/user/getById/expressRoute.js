const express = require("express")
const router = express.Router()
const { getUserById } = require("./service")

router.get("/:id", async (req, res) => {
  try {
    const user = await getUserById(req.params.id)
    res.json(user)
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router
