const PRODUCTS_REQUESTED = 'products/PRODUCTS_REQUESTED';
const PRODUCTS_COMPLETED = 'products/PRODUCTS_COMPLETED';
const PRODUCT_ADD_REQUESTED = 'products/PRODUCT_ADD_REQUESTED';
const PRODUCT_ADD_COMPLETED = 'products/PRODUCT_ADD_COMPLETED';
const PRODUCT_REMOVE_REQUESTED = 'products/PRODUCT_REMOVE_REQUESTED';
const PRODUCT_REMOVE_COMPLETED = 'products/PRODUCT_REMOVE_COMPLETED';

const initialState = {
    inProgress: false,
    products: []
}

export default (state = initialState, action) => {
    switch(action.type){
    case PRODUCTS_REQUESTED:
        return {
            ...state,
            inProgress: true
        }
    case PRODUCTS_COMPLETED:
        return {
            ...state,
            inProgress: false,
            products: action.payload.products
        }
    case PRODUCT_ADD_REQUESTED:
        return {
            ...state,
            inProgress: true
        }
    case PRODUCT_ADD_COMPLETED:
        return {
            ...state,
            inProgress: false
        }
    case PRODUCT_REMOVE_REQUESTED:
        return {
            ...state,
            inProgress: true
        }
    case PRODUCT_REMOVE_COMPLETED:
        return {
            ...state,
            inProgress: false
        }
    }
}

function fetchProducts() {
    return dispatch => {
        dispatch({ type: PRODUCTS_REQUESTED })
        const url = '/api/products/get'
        fetch(url, {
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({
            type: PRODUCTS_COMPLETED,
            payload: { product: json }
            })
        })
    }
}

function addProduct(newProduct) {
    return dispatch => {
        dispatch({ type: PRODUCT_ADD_REQUESTED })
        fetch('api/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin',
            body: JSON.stringify(newProduct)
        }).then(r => {
            return r.json()
        }).then(json => {
            dispatch({ type: PRODUCT_ADD_COMPLETED })
        })
    }
}

function removeProduct(productName) {
    return dispatch => {
        dispatch({ type: PRODUCT_REMOVE_REQUESTED })
        const url = '/api/products/delete/' + productName
        fetch('/api/products/delete/'+productName, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
          }).then(r => {
            return r.json()
          }).then(json => {
            dispatch({ type: PRODUCT_REMOVE_COMPLETED })
          })
    }
}

export { fetchProducts, removeProduct, addProduct };