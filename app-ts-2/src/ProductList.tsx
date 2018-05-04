import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';
import './ProductList.css';

interface ProductItemProps {
    product: Product;
    key: string;
    deleteProduct: (product: string) => void;
}

interface ProductItemState { }

class ProductItem extends Component<ProductItemProps, ProductItemState> {
    constructor(props: ProductItemProps) { 
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(event: React.FormEvent<HTMLButtonElement>): void {
        this.props.deleteProduct(this.props.product.name);
    }

    render(): JSX.Element {
        return (
            <div className='product'>
                <div className='details'>
                    <div className='name'>{this.props.product.name}</div>
                    <div className='desc'>{this.props.product.description}</div>
                </div>
                <div className='actions'>
                    <button 
                      className='remove' 
                      title='delete'
                      onClick={this.deleteProduct}
                    >
                        x
                    </button>
                </div>
            </div>);
    }
}

interface ProductListProps {
    products: Product[];
    deleteProduct: (product: string) => void;
}

interface ProductListState { }

class ProductList extends Component<ProductListProps, ProductListState> {
    render(): JSX.Element {
        return (
            <div className='products'>
                {this.props.products.map(
                    (p, i) =>
                        <ProductItem product={p} key={'product-' + i} deleteProduct={this.props.deleteProduct} />
                )}
            </div>);
    }
}

export default ProductList;