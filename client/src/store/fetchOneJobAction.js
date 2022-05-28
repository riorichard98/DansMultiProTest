import axios from 'axios'
import { url } from '../url'

export default function fetchOneData(id){
    return async (dispatch,getState)=>{
        try {
            const { data } = await axios.get(url+`jobs/${id}`,{
            headers:{
                token:localStorage.getItem('token')
            }
            })
            dispatch({type:'getOneJob',payload:data})
        } catch (error) {
            console.log(error);
        }
    }
}