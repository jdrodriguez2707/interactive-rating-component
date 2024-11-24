import { RatingCircle } from './RatingCircle.jsx'
import PropTypes from 'prop-types'
import iconStar from './assets/images/icon-star.svg'
import './RatingCard.css'
import { useState } from 'react'

export function RatingCard({ setSelectedRating, handleRatingSubmit }) {
  const [selectedRating, setSelectedRatingState] = useState(null)
  const ratings = [1, 2, 3, 4, 5]

  const handleRatingClick = rating => {
    setSelectedRatingState(rating)
    setSelectedRating(rating)
  }

  return (
    <article className='rating-card'>
      <div className='rating-card__image-container'>
        <img
          className='rating-card__icon-star'
          src={iconStar}
          alt='Icon star'
        />
      </div>
      <h1 className='rating-card__title'>How did we do?</h1>
      <p className='rating-card__paragraph'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='rating-circle-container'>
        {ratings.map(rating => (
          <RatingCircle
            key={rating}
            id={`rating-${rating}`}
            onClick={() => handleRatingClick(rating)}
            isSelected={selectedRating === rating}
          >
            {rating}
          </RatingCircle>
        ))}
      </div>
      <button className='rating-card__submit-btn' onClick={handleRatingSubmit}>
        Submit
      </button>
    </article>
  )
}

RatingCard.propTypes = {
  setSelectedRating: PropTypes.func.isRequired,
  handleRatingSubmit: PropTypes.func.isRequired
}
