import {instanceAxios} from "../../axios/axios";
import cookie from 'js-cookie'

export default function getUser() {
    return new Promise((resolve, reject) => {
        instanceAxios.get('users', {params: {token: cookie.get('token')}})
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                return reject(error)
            })
    })
}