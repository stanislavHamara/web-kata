import * as React from 'react';
import { Component } from 'react';
import './App.css';
import { GetData } from './data';
import Products from './Products';
import { Product, ProductCollection, SoftwareProduct, SoftwareProductCollection } from './Interfaces';

const data = GetData();


class App extends Component<{}, ProductCollection> {
  constructor() {
    super({});
    this.state = data;

    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  handleAddProduct(event: any): void {
    event.preventDefault();
    const newProductArray = [...this.state.products];

    newProductArray.push(new SoftwareProduct(
      event.target.name.value,
      event.target.description.value
    ));

    this.setState(new SoftwareProductCollection(newProductArray));
  }

  removeProduct(product: Product): void {
    const newProductArray = this.state.products.filter(
      (p: Product) => p.name === product.name);

    this.setState(new SoftwareProductCollection(newProductArray));
  }

  render(): JSX.Element {
    return (
    <div className='App'>
      <div className='App-header'>
        <h2>Kata 3- Filter, show and hide objects</h2>
      </div>
      <div className='filter-products'>Filter products here...</div>
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
        <Products
          productCollection={this.state} 
          removeProduct={this.removeProduct} 
        />
      </div>
    </div>
    );
  }
}

export default App;