import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await axios.get("http://localhost:3001/recipes")
      setRecipes(recipes.data)
    }
    fetchRecipes()
  }, [])

  console.log(recipes)

  return (
    <div className="App">
      {recipes.map((recipe, index) => {
        return (
          <div key={index} className="recipe">
            <h1>{recipe.name}</h1>
            <div className="ingredients">
              {recipe.ingredients.map((ingredient) => {
                return <p>{ingredient}</p>
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App
