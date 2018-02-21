import React, { Component } from 'react'
import data from './data.js'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'
import { Route } from 'react-router-dom';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { products: data.products }
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 4- Add router to an app</h2>
      </div>
      <div className='products-container'>
        <ProductMenu products={this.state.products} />
        <Route path="/products/:productName" component={ProductContainer} />
      </div>
    </div>
  }
}

export default App
