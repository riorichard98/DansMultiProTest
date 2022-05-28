//module yang diimport
import { Navigate} from "react-router-dom"


export default function RequireAuth({children}){
    const token = localStorage.getItem('token')
    // jika token tidak dimiliki atau belum login maka web akan beralih ke login
    if(!token){
        return <Navigate to="/login" replace/>
    }
    return children
}