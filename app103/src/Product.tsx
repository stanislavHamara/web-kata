import React, { Component } from 'react';
import './Products.css';
import { IProduct, IProductCollection } from './Interfaces';

interface Props {
    product : IProduct,
    removeProduct : Function;
}

interface State {
    showDescription : boolean
}

class Product extends Component<Props, State> {
    constructor(props : Props){
        super(props)
        this.setState({ showDescription: false });
    }
    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name'>{this.props.product.name}</div>
                <div className='desc'>{this.state.showDescription ? this.props.product.description : null}</div>
                {!this.state.showDescription ? (<button onClick={this.toggleShowDescription}>+</button>) : null }
            </div>
            <div className='actions'>
                <div className='remove' title='fix me' onClick={() => this.props.removeProduct(this.props.product)}>x</div>
            </div>
        </div>
    }
}

export default Product;
