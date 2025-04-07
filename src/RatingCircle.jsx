import PropTypes from 'prop-types'
import './RatingCircle.css'

const RatingCircle = ({ children, onClick, isSelected }) => {
  const handleRatingCircleClick = () => {
    onClick()
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleRatingCircleClick()
    }
  }

  const ratingCircleClassName = isSelected ? 'rating-circle is-selected' : 'rating-circle'

  return (
    <div
      className={ratingCircleClassName}
      onClick={handleRatingCircleClick}
      onKeyDown={handleKeyPress}
      tabIndex={0}
    >
      <p className='rating-circle__number'>{children}</p>
    </div>
  )
}

RatingCircle.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
}

export default RatingCircle
