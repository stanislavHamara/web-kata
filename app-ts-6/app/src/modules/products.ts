import { Product } from '../Models/Product';

export interface ProductsState {
    products: Product[];
    loading: boolean;
}

const createEmptyMember = (): ProductsState => {
    return {
        products: [],
        loading: false
    };
};

enum TypeKeys {
    PRODUCTS_REQUESTED = 'products/PRODUCTS_REQUESTED',
    PRODUCTS_COMPLETED = 'products/PRODUCTS_COMPLETED',
    PRODUCT_ADD_REQUESTED = 'products/PRODUCT_ADD_REQUESTED',
    PRODUCT_ADD_COMPLETED = 'products/PRODUCT_ADD_COMPLETED',
    PRODUCT_REMOVE_REQUESTED = 'products/PRODUCT_REMOVE_REQUESTED',
    PRODUCT_REMOVE_COMPLETED = 'products/PRODUCT_REMOVE_COMPLETED',
}

export interface ProductRequestedAction {
    type: TypeKeys.PRODUCTS_REQUESTED;
    payload: {
        loading: boolean;
    };
}

export interface ProductCompletedAction {
    type: TypeKeys.PRODUCTS_COMPLETED;
    payload: {
        loading: boolean;
        products: Product[];
    };
}

export type ProductActionTypes =
    ProductRequestedAction |
    ProductCompletedAction
    ;

export default (state = createEmptyMember(), action: ProductActionTypes) => {
    switch (action.type) {
        case TypeKeys.PRODUCTS_REQUESTED:
            return {
                ...state,
                loading: true
            };

        case TypeKeys.PRODUCTS_COMPLETED:
            return {
                ...state,
                loading: false,
                products: action.payload.products
            };

        default:
            return state;
    }
};

const fetchProductsAsync = () => {
    fetch('/api/products/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(r => {
      return r.json();
    });
  };

export const fetchProducts = () => {
 //
};