import * as React from 'react';
import { Component } from 'react';
import './Products.css';
import { Product } from './Models/Product';

interface Props {
  product: Product;
  removeProduct: Function;
}

interface State { 
  showDescription: boolean; 
}

class ProductComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showDescription: false
    };

    this.toggleDescription = this.toggleDescription.bind(this);
  }

  toggleDescription() {
    this.setState({showDescription: !this.state.showDescription});
  }

  render(): JSX.Element {
    return (
      <div className='product'>
        <div className='details'>
          <div className='name'>
            {this.props.product.name} 
          </div>
          <div onClick={this.toggleDescription} className='descriptionToggle'>
            {this.state.showDescription ? <span>-</span> : <span>+</span>}
          </div>
         {this.state.showDescription && <div className='desc'>{this.props.product.description}</div>} 
        </div>
        <div className='actions'>
          <div className='remove' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
        </div>
      </div>
    );
  }
}

export default ProductComponent;