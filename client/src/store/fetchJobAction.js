import axios from 'axios'
import { url } from '../url'

export default function fetchData(query){
    return async (dispatch,getState)=>{
        try {
            const { data } = await axios.get(url+'jobs',{
            params:query,
            headers:{
                token:localStorage.getItem('token')
            }
            })
            dispatch({type:'getAllJob',payload:data})
        } catch (error) {
            console.log(error);
        }
    }
}

