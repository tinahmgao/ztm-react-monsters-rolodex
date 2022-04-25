import React, { Component } from 'react'
import './card.style.css'

class Card extends Component {
    render() {
        const { name, email, id } = this.props.monster
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
}

export default Card
