import React from 'react';
import CardInput from './card-input';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <header className='app-header'><h2>Card Flipping Tracker</h2></header>
        <CardInput />
      </div>
    )
  }
}