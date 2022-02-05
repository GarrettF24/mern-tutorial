const express = require("express")
const app = express()
const mongoose = require("mongoose")
const User = require("./models/users")
const Recipe = require("./models/recipes")

app.use(express.json())

mongoose.connect(
  "mongodb+srv://@practicecluster.jw23b.mongodb.net/cookbookDataBase?retryWrites=true&w=majority"
)

app.get("/", (req, res) => res.send("this is the home root"))

app.get("/users", async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
})

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
})

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
})

app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await User.findByIdAndDelete(id)
    deleted
      ? res.status(200).send("User deleted")
      : new Error("User not deleted!")
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// RECIPES

app.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.json(recipes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
})

app.post("/recipes", async (req, res) => {
  try {
    const recipe = new Recipe(req.body)
    await recipe.save()
    res.status(201).json(recipe)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
})

app.listen(3001, () => {
  console.log("Server running successfully")
})
