require("dotenv").config()
const express = require("express")
const app = express()
const port = 3000

//server configs
// parse json request body
app.use(express.json({ limit: "50mb" }))
// parse urlencoded request body
app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
)

//import routers
const routeforNotes = "/notes"
app.use(routeforNotes, require("./note/create/expressRoute"))
app.use(routeforNotes, require("./note/getAll/expressRoute"))
app.use(routeforNotes, require("./note/update/expressRoute"))
app.use(routeforNotes, require("./note/delete/expressRoute"))
//app.use(routeforNotes, require("../../front/sign-in/index"))
//app.use(routeforNotes, require("../../front/Notas/index"))

const routeforUsers = "/users"
app.use(routeforUsers, require("./user/getById/expressRoute"))

//listen to port
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})
