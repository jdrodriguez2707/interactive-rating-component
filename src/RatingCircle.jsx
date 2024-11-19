import './RatingCircle.css'
import PropTypes from 'prop-types'
import { useState } from 'react'

export function RatingCircle({ children }) {
	const [isSelected, setIsSelected] = useState(false)

	const handleRatingCircleClick = () => {
		setIsSelected(prevIsSelected => !prevIsSelected)
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
	children: PropTypes.node.isRequired
}
