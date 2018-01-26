# React App Kata 3

Code for **Kata 3** is available in the [app3](app3) folder.

## Learning aims

The idea here is to keep learning the concept of `state`, `props`, `callbacks` and React lifecycles in React.

## Task

Write the JavaScript/React code to: 

* Filter products by name
* Show/Hide product descriptions

### Filter products:
1. Add a `<form>` to filter products within the `filter-products` div. It should contain:
    * `label` for product name
    * `input` for filtering by name
1. Create a new `interface` called `IState`. It should have:
    * an `IProductCollection`
    * a `string` for filtering by product name
1. Add a handler function for the `onChange` event of the form.
    * save the product `name` from the event in an object that implements `IState`. You can do this by creating a new `class` that `implements` `IState`, or by creating an object that matches `IState`.
1. Filter products in the `render` method based on filter input.
    * you could do [filter with javascript array object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) or [filter with underscore](http://underscorejs.org/#filter) to do this.

### Show / Hide products:

The idea is to have products be collapsible. 
1. Change the `Product` component so that descriptions are not shown.
    * do this by checking a product state property (for example: `showDescription`)
    * you can create a new `IState` `interface` for `Product`, or by simply passing a `boolean` to the `Product` interface; `class Product extends Component<Props, boolean>`
    * a very common pattern in React is [conditional rendering](https://facebook.github.io/react/docs/conditional-rendering.html), here are some examples:
        * `{condition? <div>foo</div>: null}`
        * `{condition? <div>foo</div>: <div>bar</div>}`
        * `{condition && <div>hello</div>}`
1. Add a `+` or `-` component next to the product name and toggle it on click
    * it should show or hide the product description.
1. listen to `onClick` on the component you just created and update your flag accordingly.

# Resources:

* [conditional rendering](https://facebook.github.io/react/docs/conditional-rendering.html)

