import { Product } from "../../typing/Product";
import { Api } from '../Api'

const api: Api = new Api()
export class Products {
  products = []
  producstByType = []

  async getAllProducts(): Promise<Product[]> {
    if (this.products.length) {
      return this.products
    }
    try {
        const response = await api.get('/products')
        this.products = response.data
        return response.data
    } catch (error: unknown | any) {
        throw new Error(error)
    }
  }

  async getProductByType(type: string, newQuery: Boolean = false): Promise<Product[]> {
    if (this.producstByType.length && !newQuery) {
      return this.producstByType
    }
      try {
          const response = await api.get(`/product/${type}`)
          this.products = response.data
          return response.data
      } catch (error: unknown | any) {
          throw new Error(error)
      }
  }

}
