import { useEffect, useState } from 'react'
import MealCard from './MealCard' // Component to display individual meal cards

function MealKitchen({ recipes, setRecipes, onRemove }) {
  // State to manage the loading state while fetching data
  const [loading, setLoading] = useState(true)

  // State to manage any errors during the fetch process
  const [error, setError] = useState(null)

  // Fetch recipes from the API when the component mounts
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
        if (!response.ok) {
          throw new Error('Failed to fetch recipes')
        }
        const data = await response.json()
        setRecipes(data.meals || []) // Update the recipes state with the fetched data
      } catch (err) {
        setError(err.message) // Set the error message if the fetch fails
      } finally {
        setLoading(false) // Stop the loading spinner
      }
    }

    fetchRecipes()
  }, [setRecipes])

  // Display a loading message while data is being fetched
  if (loading) return <p>Loading...</p>

  // Display an error message if the fetch fails
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      {/* Map through the recipes and render a MealCard for each */}
      {recipes.map((recipe) => (
        <MealCard
          key={recipe.idMeal} // Unique key for each meal
          idMeal={recipe.idMeal}
          meal={recipe.strMeal}
          strCategory={recipe.strCategory}
          instructions={recipe.strInstructions}
          image={recipe.strMealThumb}
          onRemove={onRemove} // Callback to remove a meal
        />
      ))}
    </div>
  )
}

export default MealKitchen