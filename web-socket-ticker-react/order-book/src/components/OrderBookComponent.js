import React from 'react';
import './OrderBook.css';

class OrderBook extends React.Component {
  render() {
    const data = this.props.data;
    const tdStyle = {
      padding: '0px',
      margin: '0px',
      width: '100px',
      'textAlign': 'center',
      'fontWeight': 'bold', 
      'fontFamily': 'monospace'
    }
    let rows = data.map((row, index) => {
      const rowStyle = {
        color: this.props.color,
        background: index % 2 ? 'rgb(230,230,230)' : '',
        height: '25px'
      };

      return (
        <tr key={row} style={rowStyle}>
          <td key={row + "-" + index} style={tdStyle}>{row.price.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td key={row + "-" + index + 1} style={tdStyle}>{(row.total/row.price).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
          <td key={row + "-" + index + 2} style={tdStyle}>{row.total.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
        </tr>
      );
    });

    return (
      <div style={{ height: '220px', overflow: 'auto', width: '90%' }}>
        <table className='table table-bordered' style={{ width: '100%' }}>
          {this.props.showHeader === true ? <thead >
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
    <div className='container'>
      <h2 style={{color: '#4285f4'}}>OrderBook Details</h2>
      <hr/>
      <OrderBook data={props.sell} color={'#EA4335'} showHeader={true} />
      <br />
      <br />
      <OrderBook data={props.buy} color={'green'} />
    </div>
  );
});


export default OrderBookHOC;