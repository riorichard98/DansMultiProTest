// url untuk hit server
import { url } from "../url";

// module yang diimport
import axios from "axios";

export default function login(username, password) {
    return () => {
        // hit server login
        return axios.post(url+'users/login',{
            username,
            password
        })
    }
}

