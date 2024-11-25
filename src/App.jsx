import { useState } from 'react'
import RatingCard from './RatingCard'
import ThankYouCard from './ThankYouCard'
import './App.css'

const App = () => {
  const [selectedRating, setSelectedRating] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleRatingSubmit = () => {
    if (selectedRating === null) {
      setError('Please select a rating before submitting.')
      setTimeout(() => {
        setError('')
      }, 5000)
      return
    }
    setIsSubmitted(true)
  }

  return (
    <>
      <main className='main-container'>
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
      </main>
      <footer className='attribution'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io/solutions/interactive-rating-component-using-react-j0FK2P8cmw'
          target='_blank'
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href='https://github.com/jdrodriguez2707' target='_blank'>
          Johan Rodriguez
        </a>
        .
      </footer>
    </>
  )
}

export default App
