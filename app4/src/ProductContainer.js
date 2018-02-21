import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import _ from 'underscore'
import data from './data.js'
import './ProductContainer.css'
import Product from './Product.js'

class ProductContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: data.products
    }
  }

  render() {
    const productName = this.props.match.params.productName;
    const product = this.state.products.find((x) => x.name === productName);

    return <div className='product-container'>
      {product && <Product product={product} />}
    </div>
  }
}

export default ProductContainer