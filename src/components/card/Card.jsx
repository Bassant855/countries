import { Link } from 'react-router-dom'
import './card.css'

const Card = ({country}) => {
  return (
    <Link className='card ' to={`/${country.cca2}`}>
        <div className='img'>
            <img src={country.flags.png} alt={country.flags.alt} />
        </div>
        <h2 className='card-heading'>{country.name.official}</h2>
        <div className="text">
            <p>Puplation: <span>{country.population}</span></p>
            <p>Regin: <span>{country.region}</span></p>
            <p>Capital: <span>{country.capital}</span></p>
        </div>


    </Link>
  )
}

export default Card