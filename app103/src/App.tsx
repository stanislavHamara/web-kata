import _ from 'underscore';
import React, { Component, SyntheticEvent, FormEvent } from 'react';
import './App.css';
import { GetData } from './data';
import Products from './Products';
import { IProduct, IProductCollection, ProductCollection, Product } from './Interfaces';

const data = GetData();

class App extends Component<{}, IProductCollection> {
  constructor() {
    super()
    this.state = data;

    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  changeProductFilter(event: any) : void {
  }

  handleAddProduct(event: any) : void {
    event.preventDefault();
    const newProductArray = [...this.state.products];

    newProductArray.push(
      new Product(event.target.name.value, event.target.description.value)
    );

    this.setState(new ProductCollection(newProductArray));
  }

  removeProduct(product : IProduct) : void {
    const newProductArray = _.filter(this.state.products, (p : IProduct) => p.name !== product.name);
    this.setState(new ProductCollection(newProductArray));
  }

  render() : JSX.Element {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 3- Filter, show and hide objects</h2>
      </div>
      <div className='filter-products'>Filter products here...</div>
      <form onSubmit={this.changeProductFilter}>
        <label>Product to filter:
            <input type='text' name='name' />
        </label>
      </form>
      <div className='add-product'>
        <form onSubmit={this.handleAddProduct}>
          <label>product name:
            <input type='text' name='name' />
          </label>
          <label>description:
            <input type='text' name='description'/>
          </label>
          <input type='submit' value='add product' />
        </form>
      </div>
      <div className='products-container'>
        <Products productCollection={this.state} removeProduct={this.removeProduct} />
      </div>
    </div>
  }
}

export default App
