import axios from 'axios'
import cookie from 'js-cookie'

const URL = process.env.VUE_APP_BASE_URL

export const instanceAxios = axios.create({
    baseURL: URL,
    headers: {
        'X-AUTH-TOKEN': cookie.get('token') || '',
        'Content-Type': 'application/json'
    }
})