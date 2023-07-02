import { Product } from "../../../interfaces/Product";
import axios from "axios";
import { API } from "../../../data/api"

export class Products {
  products = []
  producstByType = []

  getAllProducts(): Promise<Product[]> | Product[] | Error {
    if (this.products.length) {
      return this.products
    }
    return axios.get(`${API}/products`)
    .then(({ data: products }) => {
      this.products = products
      return products
    }).catch(error => {
       throw new Error(error)
    })
  }

  getProductByType(type: string, newQuery: Boolean = false): Promise<Product[]> | Product[] | Error {
    if (this.producstByType.length && !newQuery) {
      return this.producstByType
    }
    return axios.get(`${API}/products/${type}`)
        .then(({ data: products }) => {
          this.products = products
          return products.reverse()
        }).catch(error => {
          throw new Error(error)
        })
  }
}
