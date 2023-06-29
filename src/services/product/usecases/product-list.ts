import { Product } from "../../../interfaces/Product";
import axios from "axios";
import { API } from "../../../data/api"

export class Products {
  products = []

  getAllProducts(): Promise<Product[]> | Error {
    return axios.get(`${API}/products`)
    .then(({ data: products }) => {
      this.products = products
      return products
    }).catch(error => {
       throw new Error(error)
    })
  }
}
