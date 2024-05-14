/* import {Route,Routes,Link, useParams} from 'react-router-dom'
import { PortalLayout } from "../layout/PortalLayout";
import { useEffect, useState } from 'react';
import usersService from "../service/user"


export default function User  ()  {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService
        .GetAll()
        .then(users =>
          setUsers( users )
        )

       
      }, []) 

  
      const User = () =>{
        if(!User){
          return null
        } 

            const id = useParams().id
            const user = users.find(a => a._id === String(id))
             console.log(user)  
      



        return(
          <>
        

        {users.map(user => 
      <li key={user._id} >
       <Link to={`/users/${user._id}`}>{user.name}</Link> 
       </li>)}
       

 
   
         
         </>
        )
      }
      
       

 return( 

<>

    <User/> 
</>
 

)

 }

 */