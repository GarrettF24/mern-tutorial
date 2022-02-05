const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3001

mongoose.connect(
  "mongodb+srv://GarrettF:<password>@practicecluster.jw23b.mongodb.net/cookbookDatabase?retryWrites=true&w=majority"
)

app.listen(PORT, () => {
  console.log("Server running successfully")
})
