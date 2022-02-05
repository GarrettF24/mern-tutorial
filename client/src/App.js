import "./App.css"
import axios from "axios"
import { useEffect, useState, useNavigation } from "react"
function App() {
  const [recipes, setRecipes] = useState([])
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [instructions, setInstructions] = useState([])

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await axios.get("http://localhost:3001/recipes")
      setRecipes(recipes.data)
    }
    fetchRecipes()
  }, [])

  console.log(recipes)

  const createRecipe = () => {
    axios
      .post("http://localhost:3001/recipes", {
        name,
        instructions,
        ingredients,
      })
      .then((response) => {
        setRecipes(...recipes)
      })
  }

  return (
    <div className="App">
      {recipes.map((recipe, index) => {
        return (
          <div key={index} className="recipe">
            <h1>{recipe.name}</h1>
            <div className="ingredients">
              {recipe.ingredients.map((ingredient, index) => {
                return <p key={index}>{ingredient}</p>
              })}
            </div>
          </div>
        )
      })}
      <div>
        <input
          onChange={(e) => {
            setName(e.target.value)
          }}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => {
            setIngredients(e.target.value)
          }}
          type="text"
          placeholder="ingredients"
        />

        <input
          onChange={(e) => {
            setInstructions(e.target.value)
          }}
          type="text"
          placeholder="instructions"
        />
        <button onClick={createRecipe}> Create Recipe </button>
      </div>
    </div>
  )
}

export default App
