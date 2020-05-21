import * as axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "78711187-66d9-492f-8dbd-95c7a78321b1"
    }
})