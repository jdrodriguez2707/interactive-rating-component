import PropTypes from 'prop-types'
import './RatingCircle.css'

export function RatingCircle({ id, children, onClick, isSelected }) {
  console.log(id, isSelected)
  const handleRatingCircleClick = () => {
    onClick()
  }

  const ratingCircleClassName = isSelected
    ? 'rating-circle is-selected'
    : 'rating-circle'

  return (
    <>
      <input
        type='radio'
        name='rating'
        id={id}
        className='rating-circle__input'
        onChange={handleRatingCircleClick}
      />
      <label className={ratingCircleClassName} htmlFor={id}>
        <p className='rating-circle__number'>{children}</p>
      </label>
    </>
  )
}

RatingCircle.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
}
