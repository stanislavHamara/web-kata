import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProductItem.css'

class ProductItem extends Component {
  render() {
    const name = this.props.product.name
    return <Link to={'/products/' + name} >
      <div className='product-item'>
        <div className='name'>{name}</div>
      </div>
    </Link >
  }
}

export default ProductItem