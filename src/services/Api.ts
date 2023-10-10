import axios from 'axios'
import { API_URL } from '../data/api'

export class Api {
	#api: string

	constructor(apiUrl?: string) {
		this.#api = apiUrl || API_URL
	}

	/**
     * Send a GET request.
     */
	async get(endpoint: string, variables?: object): Promise<any> {
		try {
			return await axios({
				url: `${this.#api}${endpoint}`,
				...(variables || {})
			})
		} catch (e: unknown | any) {
			throw new Error(e)
		}
	}

	/**
     * Send a PUT request.
     */
	async put(endpoint: string, variables?: object): Promise<any> {
		try {
			return await axios({
				method: 'PUT',
				url: `${this.#api}${endpoint}`,
				...(variables || {})
			})
		} catch (e: unknown | any) {
			throw new Error(e)
		}
	}
}