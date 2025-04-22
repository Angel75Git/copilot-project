/*
  * Recipe App
  * This React application fetches chicken recipes from an API and allows users to filter and view them.
  * *Displays recipies for students to make
  * features: show more info about the recipe, show a list of ingredients, and show a picture of the recipe
  * *Allows users to remove recipes they are not interested in
  * *Includes a dark mode toggle for better user experience
  Components: MealCard, MealKitchen, SelectorMeal
  */




import { useState } from 'react'
import MealKitchen from './components/MealKitchen' // Component to display the list of meals
import SelectorMeal from './components/SelectorMeal' // Component for filtering meals
import './App.css' // Importing the CSS for styling

function App() {
  // State to store the list of recipes fetched from the API
  const [recipes, setRecipes] = useState([])

  // State to store the currently selected meal filter
  const [filteredMeal, setFilteredMeal] = useState('')

  // State to toggle between light and dark mode
  const [darkMode, setDarkMode] = useState(false)

  // Handler to remove a meal from the list
  const handleRemove = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.idMeal !== id))
  }

  // Handler to update the selected meal filter
  const handleSelect = (meal) => {
    setFilteredMeal(meal)
  }

  // Handler to toggle between light and dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  // Filter the recipes based on the selected meal filter
  const displayedRecipes = filteredMeal
    ? recipes.filter((recipe) => recipe.strMeal === filteredMeal)
    : recipes

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      {/* Header section with the title and dark mode toggle */}
      <header>
        <h1>Hungry?</h1>
        <h1>Recipes for College Students</h1>
        <div className="toggle-container">
          {/* Toggle switch for light/dark mode */}
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="toggle-input"
            />
            <span className="toggle-slider"></span>
          </label>
          {/* Text indicating the current mode */}
          <span className="toggle-text">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
      </header>

      {/* Meal filter dropdown */}
      <SelectorMeal recipes={recipes} onSelect={handleSelect} />

      {/* Display the filtered list of meals */}
      <MealKitchen recipes={displayedRecipes} setRecipes={setRecipes} onRemove={handleRemove} />
    </div>
  )
}

export default App
