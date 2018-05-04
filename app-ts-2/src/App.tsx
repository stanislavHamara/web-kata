import * as React from 'react';
import { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
import { GetData } from './data';
import { Product } from '../Models/Product';

interface AppState {
  products: Product[]; 
  newProductName: string;
  newProductDescription: string;
}

interface AppProps {}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      products: GetData(),
      newProductName: '',
      newProductDescription: ''
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  onNameChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      newProductName: event.currentTarget.value
    });
  }

  onDescriptionChange(event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      newProductDescription: event.currentTarget.value
    });
  }

  onSubmit(event: React.FormEvent<HTMLButtonElement>): void {
    event.preventDefault();
    const product: Product = {
      name: this.state.newProductName, 
      description: this.state.newProductDescription
    };

    const updatedProducts = this.state.products;
    updatedProducts.push(product);

    this.setState({
      products: updatedProducts
    });
  }

  deleteProduct(productName: string): void {
    const updatedProducts = this.state.products.filter(product => product.name !== productName );

    this.setState({
      products: updatedProducts
    });
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 2- Add and remove objects</h2>
        </div>
        <div className='add-product'>View to add product here...</div>
        <div className='products-container'>
          <ProductList products={this.state.products} deleteProduct={this.deleteProduct} />
          <form>
            <label htmlFor='newProductName'>New product name</label>
            <input type='text' id='newProductName' value={this.state.newProductName} onChange={this.onNameChange}/>

            <label htmlFor='newProductDescription'>New product description</label>
            <input 
              type='text' 
              id='newProductDescription' 
              value={this.state.newProductDescription} 
              onChange={this.onDescriptionChange} 
            />

            <button onClick={this.onSubmit}>Submit</button>
          </form>

        </div>
      </div>);
  }
}

export default App;