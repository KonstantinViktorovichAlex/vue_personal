import {instanceAxios} from "../../axios/axios";
import cookie from "js-cookie";

export default function getNotificationHeader() {
    return new Promise((resolve, reject) => {
        instanceAxios.get('notifications', {params: {userToken: cookie.get('token')}})
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                return reject(error)
            })
    })
}