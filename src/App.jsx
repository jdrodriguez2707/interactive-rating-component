import './App.css'
import { useState } from 'react'
import { RatingCard } from './RatingCard'
import { ThankYouCard } from './ThankYouCard'

function App() {
  const [selectedRating, setSelectedRating] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleRatingSubmit = () => {
    setIsSubmitted(true)
  }

  return (
    <div className='main-container'>
      {isSubmitted ? (
        <ThankYouCard selectedRating={selectedRating} />
      ) : (
        <RatingCard
          setSelectedRating={setSelectedRating}
          handleRatingSubmit={handleRatingSubmit}
        />
      )}
    </div>
  )
}

export default App
