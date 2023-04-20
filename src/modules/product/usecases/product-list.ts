import { Product } from "../../../interfaces/Product";
import axios from "axios";

export class Products {
  products = []

  getAllProducts(): Promise<Product[]> | Error {
    return axios.get('https://imports-api.vertocode.com/products')
    .then(({ data: products }) => {
      this.products = products
      return products
    }).catch(error => {
       throw new Error(error)
    })
  }
}
