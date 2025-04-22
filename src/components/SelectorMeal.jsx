import { useState } from 'react'

function SelectorMeal({ recipes, onSelect }) {
  // State to store the currently selected meal
  const [selectedMeal, setSelectedMeal] = useState('')

  // Handler to update the selected meal and notify the parent component
  const handleChange = (event) => {
    const selectedValue = event.target.value
    setSelectedMeal(selectedValue)
    onSelect(selectedValue)
  }

  // Extract unique meal names from the recipes
  const uniqueMeals = [...new Set(recipes.map((recipe) => recipe.strMeal))]

  return (
    <div className="selector-meal">
      <label htmlFor="meal-select">Filter by Meal:</label>
      <select id="meal-select" value={selectedMeal} onChange={handleChange}>
        <option value="">All Meals</option>
        {/* Render an option for each unique meal */}
        {uniqueMeals.map((meal) => (
          <option key={meal} value={meal}>
            {meal}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectorMeal