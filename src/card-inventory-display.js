import React from 'react';

export default class CardInventoryDisplay extends React.Component {



  render() {
    let cards = this.props.cards;
    let displayCards = cards.map((card, index) => (
      <li key={index}>
        <div>{card.playerName} - {card.cardYear} {card.cardDescription}</div>
        <button id={index} onClick={(e) => this.props.handleDelete(e.target.id)}>delete</button>
      </li>
    ))
    return (
      <div className='card-inventory-display-container'>
        <h2>Card inventory</h2>
        <ul>
          {displayCards}
        </ul>
      </div>
    )
  }
}