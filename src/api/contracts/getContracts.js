import {instanceAxios} from "../../axios/axios";
import cookie from "js-cookie";

export default function getContracts() {
    return new Promise((resolve, reject) => {
        instanceAxios.get('contracts', {params: {userToken: cookie.get('token')}})
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                return reject(error)
            })
    })
}