import { useEffect, useState } from "react";
import { API_URL } from "../auth/constants";
import { useAuth } from "../auth/AuthProvider";
import { Link } from 'react-router-dom'
import {
 useParams
} from 'react-router-dom'






function Allusers(){
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

    return(
      <>

      
     
 

                 {users.map((user)=>(
                  <article className='articleperfil' key={user._id}>
                   <header className='headerperfil sidedivperfil'>
                <Link className='aroutes'  to={`/perfil/${user._id}`} >
                <img className='imgperfil' src="/img/logoperfil.png"></img>
                </Link>


                <div className='containerperfiltext'>
                    <strong className='stnombreperfil'>{user.name}</strong>
                    <span className='spusernameperfil'>@{user.username}</span>
                </div>
                
                     </header>
                    </article>

                ))} 




      </>
    )

}


export {Allusers}