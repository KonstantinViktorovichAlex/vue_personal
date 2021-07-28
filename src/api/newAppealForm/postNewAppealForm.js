import {instanceAxios} from "../../axios/axios";

export default function postNewAppealForm(data) {
    return new Promise((resolve, reject) => {
        instanceAxios.post('appeal', data)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                return reject(error)
            })
    })
}