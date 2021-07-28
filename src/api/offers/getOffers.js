import {instanceAxios} from "../../axios/axios";
import cookie from "js-cookie";

export default function getOffers() {
    return new Promise((resolve, reject) => {
        instanceAxios.get('offers', {params: {userToken: cookie.get('token')}})
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                return reject(error)
            })
    })
}