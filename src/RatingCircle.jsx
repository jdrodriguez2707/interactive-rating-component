import PropTypes from 'prop-types'
import './RatingCircle.css'

export function RatingCircle({ children }) {
	return (
		<div className='rating-circle'>
			<p className='rating-circle__number'>1</p>
		</div>
	)
}

RatingCircle.propTypes = {
	children: PropTypes.number.isRequired
}
