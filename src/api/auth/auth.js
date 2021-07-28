import {instanceAxios} from "../../axios/axios";

export default function auth(login) {
    return new Promise((resolve, reject) => {
        instanceAxios.get('users', {params: {login: login}}).then((response) => {
            resolve(response.data)
        }).catch((error) => {
            return reject(error)
        })
    })
}