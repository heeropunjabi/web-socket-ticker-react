import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import OrderBook from './components/OrderBookComponent';

class App extends Component {
  constructor() {
    super()
    this.state = {
      bidOrders: [],
      askOrders: []
    }
    let wsConnection = new WebSocket('ws://localhost:7979');
    wsConnection.onmessage = (event) => {
      const dataReceived = JSON.parse(event.data);
      let bidOrders = dataReceived.filter((order) => {
        return order.type === 'bid'
      });
      let askOrders = dataReceived.filter((order) => {
        return order.type === 'ask'
      });
      this.setState({
        bidOrders,
        askOrders
      })

    }
  }
  render() {
    return (
      <OrderBook buy={this.state.bidOrders} sell={this.state.askOrders} />
    );
  }
}

export default App;
