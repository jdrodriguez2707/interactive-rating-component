import { useState } from 'react'
import { RatingCard } from './RatingCard'
import { ThankYouCard } from './ThankYouCard'
import './App.css'

function App() {
  const [selectedRating, setSelectedRating] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleRatingSubmit = () => {
    if (selectedRating === null) {
      setError('Please select a rating before submitting.')
      return
    }
    setIsSubmitted(true)
  }

  return (
    <div className='main-container'>
      {isSubmitted ? (
        <ThankYouCard selectedRating={selectedRating} />
      ) : (
        <>
          {error && <p className='error-message'>{error}</p>}
          <RatingCard
            setSelectedRating={setSelectedRating}
            handleRatingSubmit={handleRatingSubmit}
          />
        </>
      )}
    </div>
  )
}

export default App
