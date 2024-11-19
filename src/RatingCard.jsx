import { RatingCircle } from './RatingCircle.jsx'
import iconStar from './assets/images/icon-star.svg'
import './RatingCard.css'

export function RatingCard() {
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
				<RatingCircle>1</RatingCircle>
				<RatingCircle>2</RatingCircle>
				<RatingCircle>3</RatingCircle>
				<RatingCircle>4</RatingCircle>
				<RatingCircle>5</RatingCircle>
			</div>
			<button className='rating-card__submit-btn'>Submit</button>
		</article>
	)
}
