import axios from "axios"


const BASE_URL = 'http://localhost:3001'
export const getMethod = (endpoint)=>{
    return axios.get(`${BASE_URL}${endpoint}`).then(res =>res.data).catch(err=>console.log(err))
}



export const postMethod = (endpoint,data)=>{
    return axios.post(`${BASE_URL}${endpoint}`,data).then(res=>res.data).catch(err=>console.log(err))
}

export const deleteMethod = (endpoint)=>{
    return axios.delete(`${BASE_URL}${endpoint}`).then(res=>res.data).catch(err=>console.log(err))
}   
 

