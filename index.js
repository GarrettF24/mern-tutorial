const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log("Server running successfully")
})
