const express = require("express")
const app = express()
const mongoose = require("mongoose")
const UserModel = require("./models/users")

mongoose.connect(
  "mongodb+srv://GarrettF:<>@practicecluster.jw23b.mongodb.net/cookbookDataBase?retryWrites=true&w=majority"
)

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find()
    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
})

app.listen(3001, () => {
  console.log("Server running successfully")
})
