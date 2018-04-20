import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product';
import { ProductItem } from './ProductItem';

export class ProductList extends Component<ProductListProps, {}> {
    constructor(props: ProductListProps) {
        super(props);
    }
    render(): JSX.Element {
        const products = this.props.products;
        const listItems = products.map((product) => (
            <ProductItem product={product} />
        ));
        return (
            <ul>{listItems}</ul>
        );
    }
}

interface ProductListProps {
    products: Product[];
}