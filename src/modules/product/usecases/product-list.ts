import { Product } from "../../../interfaces/Product";
import axios from "axios";

export interface IProductListUseCase {} // use if needed

export class Products {
  products = []

  getAllProducts(): any {
    return axios.get('https://imports-api.vertocode.com/products')
    .then(({ data: products }) => {
      this.products = products
      return products
    }).catch(error => {
       throw new Error(error)
    })
  }
}
