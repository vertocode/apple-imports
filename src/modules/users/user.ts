import { NormalUser, GoogleUser } from "../../interfaces/User";
import axios from "axios";

export class Users {
    allUsers = []

    getAllUsers(): Promise<NormalUser|GoogleUser[]> | Error {
        return axios.get('https://imports-api.vertocode.com/users')
            .then(({ data: users }) => {
                this.allUsers = users
                return users
            }).catch(error => {
                throw new Error(error)
            })
    }

    async updateUserData(userData: NormalUser|GoogleUser, userIndex: number) {
        return axios.put(`https://imports-api.vertocode.com/users/${userIndex}`, userData)
            .then(response => {
                return response
            }).catch(error => {
                console.error(error)
                return error
            })
    }
}
