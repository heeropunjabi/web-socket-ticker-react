import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import OrderBook from './components/OrderBookComponent';


class App extends Component {
  render() {
    var data = [
      {
        "type": "bid",
        "total": 139849,
        "price": 9293.5
      },
      {
        "type": "bid",
        "total": 327371,
        "price": 9293
      },
      {
        "type": "bid",
        "total": 549614,
        "price": 9292.5
      },
      {
        "type": "bid",
        "total": 74351,
        "price": 9292
      },
      {
        "type": "bid",
        "total": 128308,
        "price": 9291.5
      },
      {
        "type": "bid",
        "total": 1745,
        "price": 9291
      },
      {
        "type": "bid",
        "total": 1200,
        "price": 9290.5
      },
      {
        "type": "bid",
        "total": 107088,
        "price": 9290
      },
      {
        "type": "bid",
        "total": 35552,
        "price": 9289.5
      },
      {
        "type": "bid",
        "total": 37576,
        "price": 9289
      },
      {
        "type": "bid",
        "total": 1075,
        "price": 9288.5
      },
      {
        "type": "bid",
        "total": 484472,
        "price": 9288
      },
      {
        "type": "bid",
        "total": 30,
        "price": 9287.5
      },
      {
        "type": "bid",
        "total": 6292,
        "price": 9287
      },
      {
        "type": "bid",
        "total": 172,
        "price": 9286.5
      },
      {
        "type": "bid",
        "total": 8139,
        "price": 9286
      },
      {
        "type": "bid",
        "total": 103471,
        "price": 9285.5
      },
      {
        "type": "bid",
        "total": 150475,
        "price": 9285
      },
      {
        "type": "bid",
        "total": 5662,
        "price": 9284.5
      },
      {
        "type": "bid",
        "total": 79769,
        "price": 9284
      },
      {
        "type": "bid",
        "total": 11483,
        "price": 9283.5
      },
      {
        "type": "bid",
        "total": 69923,
        "price": 9283
      },
      {
        "type": "bid",
        "total": 108796,
        "price": 9282.5
      },
      {
        "type": "bid",
        "total": 186055,
        "price": 9282
      },
      {
        "type": "bid",
        "total": 15020,
        "price": 9281.5
      },
      {
        "type": "ask",
        "total": 60000,
        "price": 9294
      },
      {
        "type": "ask",
        "total": 31066,
        "price": 9294.5
      },
      {
        "type": "ask",
        "total": 9896,
        "price": 9295
      },
      {
        "type": "ask",
        "total": 506,
        "price": 9295.5
      },
      {
        "type": "ask",
        "total": 87999,
        "price": 9296
      },
      {
        "type": "ask",
        "total": 2841,
        "price": 9296.5
      },
      {
        "type": "ask",
        "total": 61601,
        "price": 9297
      },
      {
        "type": "ask",
        "total": 81402,
        "price": 9297.5
      },
      {
        "type": "ask",
        "total": 14317,
        "price": 9298
      },
      {
        "type": "ask",
        "total": 40372,
        "price": 9298.5
      },
      {
        "type": "ask",
        "total": 9430,
        "price": 9299
      },
      {
        "type": "ask",
        "total": 38286,
        "price": 9299.5
      },
      {
        "type": "ask",
        "total": 462916,
        "price": 9300
      },
      {
        "type": "ask",
        "total": 137251,
        "price": 9300.5
      },
      {
        "type": "ask",
        "total": 1230,
        "price": 9301
      },
      {
        "type": "ask",
        "total": 2009,
        "price": 9301.5
      },
      {
        "type": "ask",
        "total": 42905,
        "price": 9302
      },
      {
        "type": "ask",
        "total": 95690,
        "price": 9302.5
      },
      {
        "type": "ask",
        "total": 34178,
        "price": 9303
      },
      {
        "type": "ask",
        "total": 101253,
        "price": 9303.5
      },
      {
        "type": "ask",
        "total": 126786,
        "price": 9304
      },
      {
        "type": "ask",
        "total": 1210,
        "price": 9304.5
      },
      {
        "type": "ask",
        "total": 223060,
        "price": 9305
      },
      {
        "type": "ask",
        "total": 65863,
        "price": 9305.5
      },
      {
        "type": "ask",
        "total": 80939,
        "price": 9306
      }
    ];
    setTimeout(()=>{
      debugger;
      data = [];
    },2000)
    return (
      <OrderBook buy={data} sell={data}/>
    );
  }
}

export default App;
