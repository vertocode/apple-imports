import { NormalUser, GoogleUser } from "../../interfaces/User";
import axios from "axios";
import {API} from "../../data/api";

export class Users {
    allUsers = []

    getAllUsers(): Promise<NormalUser|GoogleUser[]> | Error {
        return axios.get(`${API}/users`)
            .then(({ data: users }) => {
                this.allUsers = users
                return users
            }).catch(error => {
                throw new Error(error)
            })
    }

    async updateUserData(userData: NormalUser|GoogleUser, userIndex: number) {
        return axios.put(`${API}/${userIndex}`, userData)
            .then(response => {
                return response
            }).catch(error => {
                throw new Error(error)
            })
    }
}
