import React, { Component } from 'react'
import './ProductMenu.css'
import { Link } from 'react-router-dom'

class ProductItem extends Component {
  render() {
    const name = this.props.product.name
    return <div className='product-item'>
      <div className='name'><Link to={'/products/' + name}>{name}</Link></div>
      <button onClick={this.props.deleteProduct}>delete</button>
    </div>
  }
}

class ProductMenu extends Component {
  render() {
    return <div className='product-menu'>
      {this.props.products.map(
        (p, i) => <ProductItem product={p} key={'product-' + i} deleteProduct={() => this.props.deleteProduct(p.name)} />
      )}
    </div>
  }
}

export default ProductMenu