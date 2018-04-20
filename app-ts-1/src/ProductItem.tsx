import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';

export class ProductItem extends Component<ProductItemProps, {}> {
    constructor(props: ProductItemProps) {
        super(props);
    }
    render(): JSX.Element {
        const product = this.props.product;
        return (
            <div>
                <li key={product.name}>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    {product.free ? <p>FREE</p> : null}
                    {product.new ? <p>NEW</p> : null}
                </li>
            </div>
        );
    }
}

interface ProductItemProps {
    product: Product;
}