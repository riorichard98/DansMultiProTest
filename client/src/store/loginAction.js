// url untuk hit server
import { url } from "../url";

// module yang diimport
import axios from "axios";

export default function login(username, password) {
    return () => {
        return axios.post(url+'users/login',{
            username,
            password
        })
    }
}

