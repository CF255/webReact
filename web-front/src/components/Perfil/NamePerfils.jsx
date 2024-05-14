import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import {
 useParams
} from 'react-router-dom'
import { API_URL } from "../../auth/constants";
import { useAuth } from "../../auth/AuthProvider";
import "/public/css/perfil.css"


export default function NamePerfils(){
  const [users, setUsers] = useState([])
  const auth = useAuth()



  useEffect(() => {
      loadUsers() 
      }, []);



      
    async function loadUsers() {
    try {
      const response = await fetch(`${API_URL}/perfil/users`,{
      headers: {
        "Content-Type": "aplication/json",
        Authorization: `Bearer ${auth.getAccessToken()}`,
      }
      })
  
      if(response.ok){
        const json = await response.json()
        setUsers(json)
      }else{
  
      }
    } catch (error) {
      
    }

    }

   
    function User () {
      if(!User){
        return 
      } 

          const id = useParams().id
          const user = users.find(a => a._id === String(id))
            console.log(user)  
    

      return(
        <>

<h3 className="titulousuario">{user?.name}</h3>

       </>
      )
    }

    return(
      <>
     <User/>
      </>
    )

}


