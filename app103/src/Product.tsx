import React, { Component } from 'react';
import './Products.css';
import { IProduct, IProductCollection } from './Interfaces';

interface Props {
    product : IProduct,
    removeProduct : Function;
}

class Product extends Component<Props, {}> {
    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name'>{this.props.product.name}</div>
                <div className='desc'>{this.props.product.description}</div>
            </div>
            <div className='actions'>
                <div className='remove' title='fix me' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
            </div>
        </div>
    }
}

export default Product;
