import { Navigate} from "react-router-dom"


// agar ketika sudah login , page login tidak dapat diakses lagi
export default function PreventLogin({children}){
    const token = localStorage.getItem('token')
    // jika token tidak dimiliki atau belum login maka web akan beralih ke login
    if(token){
        return <Navigate to="/jobs" replace/>
    }
    return children
}