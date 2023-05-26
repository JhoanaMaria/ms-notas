/*
---1
generate models from db with script: 
npx sequelize-auto -o "./models" -d ms_notes -h localhost -u root -p 3306 -e mysql --caseModel c --caseProp c --caseFile c
more info https://github.com/sequelize/sequelize-auto

---2
implement:
const models = require("./database/connection")
models.imagen.create({ publicId: "1", rutaImagen: "ruta" })

---3
multiple inner join in sequelize:
Service.findAll({
  include : [
    { 
      model: ServiceCollection, 
      required: true,
      include: [
                {model: Client, 
                  where:{id:1} 
                 required: true  
                }
              ]}
  ]
})
more info: https://stackoverflow.com/questions/31983885/create-multiple-inner-joins-with-sequelize-orm

*/

const Sequelize = require("sequelize")

const dbName = process.env.DATABASE_NAME
const dbUser = process.env.DATABASE_USER
const dbPass = process.env.DATABASE_PASSWORD
const dbHost = process.env.DATABASE_HOST

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: "mysql",
  // dialectOptions: {
  //     connectTimeout: 300000 // aumenta el tiempo de espera a 60 segundos
  // },
  requestTimeout: 30000,
  logging: false,
})

const testConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
  } catch (error) {
    console.error("Unable to connect to the database:", error)
  }
}

testConnection()

const models = require("./models/init-models")(sequelize)

models.sequelize = sequelize
module.exports = { db: models }
