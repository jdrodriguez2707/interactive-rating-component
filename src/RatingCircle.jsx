import PropTypes from 'prop-types'
import { useState } from 'react'
import './RatingCircle.css'

export function RatingCircle({ children, onClick }) {
  const [isSelected, setIsSelected] = useState(false)

  const handleRatingCircleClick = () => {
    setIsSelected(prevIsSelected => !prevIsSelected)
    onClick()
  }

  const ratingCircleClassName = isSelected
    ? 'rating-circle is-selected'
    : 'rating-circle'

  return (
    <div className={ratingCircleClassName} onClick={handleRatingCircleClick}>
      <p className='rating-circle__number'>{children}</p>
    </div>
  )
}

RatingCircle.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
