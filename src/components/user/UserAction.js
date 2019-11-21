const BASE_URL = 'http://localhost:3003/api/user'

import axios from 'axios'

export function getList() {
    const request = axios.get(BASE_URL)
    return { type: 'USER_LIST_FETCHED', payload: request }
}