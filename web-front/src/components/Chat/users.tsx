import "/public/css/chatmessages.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { User } from "../../types/types";
import { useEffect } from "react";


export default function Users({joinRoom, setUsername, users, setRoom}:{setRoom: any ,joinRoom:any, setUsername:any, users: User[]}){

    useEffect(()=>{
        setUsername("null")
        setRoom("0")
        
    },[])


joinRoom()

    return(
       <>
      
        <div className="chat-usuarios-container">

            <div className="chatUserHeader">
            <h3>Chats</h3>
            <input type="text" />
            <button><FontAwesomeIcon  icon={faSearch}/></button>
            </div>
           

           <div className="showUsersChat">
            
           {users.map((user)=>(

            <button onClick={()=>{
                setUsername(user.name)
                setRoom("1") 
      
                 joinRoom()
                 }}  className='articlePerfilChat' key={user.id} >
            
    
          <img className='imgperfilChat' src={user.image}></img>
        

          <div className='containerTextChatPerfil'>
              <h3  className='nombrePerfilChat'>{user.name}</h3>
              <p className="ultimoMensajePerfilChat">ultimo mensaje</p>
            
          </div>

          
          <div className="linePerfilChat"></div>
              </button>
              
           
             
         
          ))}  
          
          
           </div>


             
            </div>

            

       </> 
    )
}