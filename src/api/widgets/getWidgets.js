import {instanceAxios} from "../../axios/axios";

export default function getWidgets() {
    return new Promise((resolve, reject) => {
        instanceAxios.get('widgets',)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                return reject(error)
            })
    })
}