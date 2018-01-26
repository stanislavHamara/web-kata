interface IProduct {
  name: string
  description: string
}

interface IProductCollection {
  products: IProduct[]
}

class ProductCollection implements IProductCollection {
  constructor(
    public products: IProduct[]
  ){}
}

class Product implements IProduct {
  constructor(
    public name: string,
    public description: string
  ){}
}

  export { IProduct, IProductCollection, ProductCollection, Product };