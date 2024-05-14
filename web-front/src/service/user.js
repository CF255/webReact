import axios from 'axios'
const baseUrl = 'http://localhost:3100/api/perfil/users'

const GetAll = ()=>{


    const request = axios.get(baseUrl)
    return request.then(response => response.data)



}


export default{GetAll}

