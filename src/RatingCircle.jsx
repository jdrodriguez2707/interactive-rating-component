import PropTypes from 'prop-types'
import './RatingCircle.css'

const RatingCircle = ({ children, onClick, isSelected }) => {
  const handleRatingCircleClick = () => {
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
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
}

export default RatingCircle
