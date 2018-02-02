const PRODUCTS_REQUESTED = 'products/PRODUCTS_REQUESTED';
const PRODUCTS_COMPLETED = 'products/PRODUCTS_COMPLETED';
const PRODUCT_ADD_REQUESTED = 'products/PRODUCT_ADD_REQUESTED';
const PRODUCT_ADD_COMPLETED = 'products/PRODUCT_ADD_COMPLETED';
const PRODUCT_REMOVE_REQUESTED = 'products/PRODUCT_REMOVE_REQUESTED';
const PRODUCT_REMOVE_COMPLETED = 'products/PRODUCT_REMOVE_COMPLETED';

export default (state = initialState, action) => {
  return state;
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

function addProduct(product) {
    const formData = new FormData();
    formData.append( "json", JSON.stringify(product));

    return dispatch => {
        dispatch({ type: PRODUCT_ADD_REQUESTED })
        const url = '/api/products/add'
        fetch(url, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: formData
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({
            type: PRODUCT_ADD_COMPLETED
            })
        })
    }
}

function removeProduct(productName) {
    return dispatch => {
        dispatch({ type: PRODUCT_REMOVE_REQUESTED })
        const url = '/api/products/delete/' + productName
        fetch(url, {
            method: 'DELETE',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        }).then(response => {
            return response.json()
        }).then(json => {
            dispatch({
            type: PRODUCT_REMOVE_COMPLETED,
            payload: { product: json }
            })
        })
    }
}