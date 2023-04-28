
import { Link } from '@react-navigation/native';

function Card(card) {
  return (
    <div className="card">
      <Link>
        <img src={card.cover} alt={card.title} className="image" />
      </Link>
      <p>{card.title}</p>
    </div>
  )
}

export default Card