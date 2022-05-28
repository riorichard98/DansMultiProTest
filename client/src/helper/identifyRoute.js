import { Navigate } from "react-router-dom";

export default function IdentifyRoute(){
    // jika ada yang mengakses tanpa menentukan routenya maka akan secara otomatis di navigasi
    // jika token belum ada atau belum login akan dinavigasi ke page login
    // jika sudah login akan dinavigasi ke page list job
  return localStorage.token?<Navigate to="/jobs" replace ></Navigate>: <Navigate to="/login" replace ></Navigate>
}