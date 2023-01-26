import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7b5ee42a-51d0-4ff1-9858-a8f0bcf6171d"
    }
})