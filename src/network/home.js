import {request} from "./request";
export function getUser() {
    return request({
        url:"/home/user",
        headers:{
            token:localStorage.getItem("lirhtoken")
        }
    })
}