import {request} from "./request";

export function login(User) {
    return request({
        url:"/login",
        method:'post',
        data:User
    })
}

export function logout() {
    return request({
        url:"/logout",
        headers:{
            token:localStorage.getItem("lirhtoken")
        }

    })
}

export function hello() {
    return request({
        url:"/hello",

    })
}