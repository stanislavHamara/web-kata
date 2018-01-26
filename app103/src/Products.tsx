import React, { Component } from 'react';
import './Products.css';
import Product from './Product';
import { IProduct, IProductCollection } from './Interfaces';

interface Props {
    productCollection : IProductCollection,
    productNameFilter: string,
    removeProduct : Function;
}

class Products extends Component<Props, {}> {
    render(){
        return <div className='products'>
            {this.props.productCollection.products.map(
                (p : IProduct, i : number) => {
                    if(p.name !== this.props.productNameFilter){
                        return <Product
                            product={p}
                            key={'product-' + i }
                            removeProduct={this.props.removeProduct}
                        />;
                    }
            
                    return;
                }
            )}
        </div>
    }
}

export default Products;