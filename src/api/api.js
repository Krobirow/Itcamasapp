import { instance } from "./instance";

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    onUnfollow(userId = 1) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data)
    },
    onFollow(userId = 1) {
        return instance.post(`follow/${userId}`)
        .then(response => response.data)
    }
}

export const authApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    someFunc(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    }
}

export const profilesApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    someFunc(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    }
}

export const followWatcherApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    someFunc(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    }
}
