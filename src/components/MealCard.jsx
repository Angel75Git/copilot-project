import { useState } from 'react'

function MealCard({ idMeal, meal, strCategory, instructions, image, onRemove }) {
  // State to toggle between showing more or less of the instructions
  const [showMore, setShowMore] = useState(false)

  // Generate a random time between 20 and 60 minutes for demonstration
  const approximateTime = Math.floor(Math.random() * 41) + 20

  return (
    <div className="meal-card">
      {/* Display the meal image */}
      <img src={image} alt={meal} />
      <div className="meal-info">
        <h2>{meal}</h2>
        <p>Category: {strCategory}</p>
        <p className="meal-time">
          <span role="img" aria-label="clock">
            ⏰
          </span>{' '}
          {approximateTime} minutes
        </p>
      </div>
      <p>
        {/* Toggle between showing more or less of the instructions */}
        {showMore ? instructions : `${instructions.substring(0, 100)}...`}
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Read More'}
        </button>
      </p>
      {/* Button to remove the meal */}
      <button onClick={() => onRemove(idMeal)}>Not Interested</button>
    </div>
  )
}

export default MealCard