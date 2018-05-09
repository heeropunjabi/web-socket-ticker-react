import React from 'react';
import './OrderBook.css';

class OrderBook extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data : props.data
    }
   

  }
  render() {
    const data = this.state.data;
    const tdStyle = {
      padding: '0px',
      margin: '0px',
      width: '100px'
    }
    let rows = data.map((row, index) => {
      const rowStyle = {
        color: this.props.color,
        background: index % 2 ? 'rgb(230,230,230)' : '',
        height: '20px'
      };

      return (
        <tr key={row} style={rowStyle}>
          <td key={row + "-" + index} style={tdStyle}>{row.price}</td>
          <td key={row + "-" + index + 1} style={tdStyle}>{row.size}</td>
          <td key={row + "-" + index + 2} style={tdStyle}>{row.total}</td>
        </tr>
      );
    });

    return (
      <div style={{ height: '200px', overflow: 'auto', width: '500px' }}>
        <table class="table table-bordered" style={{ width: '500px' }}>
          {this.props.color == 'red' ? <thead >
            <tr>
              <th style={tdStyle}>Price</th>
              <th style={tdStyle}>Size</th>
              <th style={tdStyle}>Total</th>
            </tr>
          </thead> : ''}
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}


const OrderBookHOC = ((props) => {
  return (
    <div class="container">
      <h2>orderbook</h2>
      <OrderBook data={props.sell} color={'red'} />
      <br />
      <br />
      <OrderBook data={props.buy} color={'green'} />
    </div>
  );
});


export default OrderBookHOC;