import PropTypes from 'prop-types'
import thankYouIllustration from './assets/images/illustration-thank-you.svg'
import './ThankYouCard.css'

const ThankYouCard = ({ selectedRating }) => (
  <article className='thank-you-card'>
    <img
      className='thank-you-card__illustration'
      src={thankYouIllustration}
      alt='Thank you illustration'
    />
    <div className='thank-you-card__rating-container'>
      <p className='thank-you-card__rating-text'>
        You selected <span>{selectedRating}</span> out of 5
      </p>
    </div>
    <h1 className='thank-you-card__title'>Thank you!</h1>
    <p className='thank-you-card__paragraph'>
      We appreciate you taking the time to give a rating. If you ever need more
      support, don&apos;t hesitate to get in touch!
    </p>
  </article>
)

ThankYouCard.propTypes = {
  selectedRating: PropTypes.number.isRequired
}

export default ThankYouCard
