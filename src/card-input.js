/* eslint-disable no-fallthrough */
import React from 'react';

export default class CardInput extends React.Component {
  
  handleSumbit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    let playerName = '';
    let cardYear = '';
    let cardDescription = '';

    for (let value of data) {
      console.log('key:', value[0], 'value:', value[1]);
      // eslint-disable-next-line default-case
      switch(value[0]) {
        case 'player-name':
          playerName = value[1];
        case 'card-year': 
          cardYear = value[1];
        case 'card-description':
          cardDescription = value[1];
      }
    }
    console.log('Card Input:', playerName, cardYear, cardDescription)
  }
  
  render() {
    return (
      <div>
        <h2>Card Input</h2>
        <form onSubmit={(e) => this.handleSumbit(e)}>
          <label>Player Name: </label>
          <input name='player-name' type='text' /> 
          <label>Year: </label>
          <select name='card-year'>
            <option value='2019'> 2019</option>
            <option value='2018'> 2018</option>
            <option value='2017'> 2017</option>
            <option value='2016'> 2016</option>
            <option value='2015'> 2015</option>
          </select>
          <label>Card Details: </label>
          <input name='card-description' type='text' />
          <input type='submit' value='submit' />
        </form>
      </div>
    )
  }
}