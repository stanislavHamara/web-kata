import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import data from './data.js'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { products: [] }
  }

  componentWillMount() {
    var that = this;
    const products = fetch("/api/products/get").then((response) => {
      response.json().then((result) => {
        that.setState({ products: result });
      });
    }, (error) => {
    })
  }

  addProduct = (e) => {
    e.preventDefault();
    var that = this;
    var newProduct = {
      name: e.target.name.value,
      description: e.target.description.value
    }
    const updatedProducts = fetch("/api/products/add", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    }).then((response) => {
      response.json().then((result) => {
        that.setState({ products: result });
      });
    })
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 5 - Interaction with backend server through REST API calls</h2>
      </div>
      <div className='products-add-product'>
        <form onSubmit={this.addProduct}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Description:
            <input type="text" name="description" />
          </label>
          <button>Add product</button>
        </form>
      </div>
      <div className='products-container'>
        <ProductMenu products={this.state.products} />
        <Route exact path='/products/:productName' component={
          props => <ProductContainer {...props} products={this.state.products} />
        } />
      </div>
    </div>
  }
}

export default App
