import { NormalUser, GoogleUser } from '../../typing/User'
import {Api} from "../Api";

const api = new Api()

export class Users {
    async getAllUsers(): Promise<NormalUser[] | GoogleUser[] | Error> {
        try {
            const response = await api.get('/users')
            return response.data
        } catch (error: unknown | any) {
            throw new Error(error)
        }
    }

    async updateUserData(userData: NormalUser|GoogleUser, userIndex: number) {
        try {
            return await api.put(`/${userIndex}`, userData)
        } catch (error: unknown | any) {
            throw new Error(error)
        }
    }
}
