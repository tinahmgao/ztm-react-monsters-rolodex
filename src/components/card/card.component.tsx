import { Monster } from '../../App'
import './card.style.css'

type CardProps = {
    monster: Monster,
}

const Card = ({ monster }: CardProps) => {
    const { name, email, id } = monster
    return (
        <div className="card-container">
            <img
                className="card-img"
                src={`https://robohash.org/${id}?set=set3`}
                alt={`monster ${name}`}
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card
