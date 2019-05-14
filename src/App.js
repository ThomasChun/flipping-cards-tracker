import React from 'react';
import CardInput from './card-input';
import CardInventoryDisplay from './card-inventory-display';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardInventory: []
    }
    this.handleAddCard = this.handleAddCard.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddCard(newCard) {
    console.log(newCard);
    console.log(this.state.cardInventory);
    this.setState({
      cardInventory: [...this.state.cardInventory, newCard],
    })
    console.log(this.state.cardInventory);
  }

  handleDelete(index) {
    console.log(index);
    this.state.cardInventory.splice(index, 1);
    this.setState({
      cardInventory: this.state.cardInventory,
    })
  }

  render() {
    return (
      <div className='app'>
        <header className='app-header'><h2>Card Flipping Tracker</h2></header>
        <CardInput addCard={this.handleAddCard}/>
        <CardInventoryDisplay cards={this.state.cardInventory} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}