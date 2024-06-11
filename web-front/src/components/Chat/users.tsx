import "/public/css/chatmessages.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { User } from "../../types/types";
import { useEffect, useState } from "react";
import io from "socket.io-client"

const socket = io.connect("http://localhost:3100")

export default function Users({ users}:{socket:any,  users: User[]}){

    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')
    const [name, setname] = useState('')
    console.log(users)

    const joinRoom = () =>{
        if(username != "" && room != ''){
            socket.emit("join_room", room)
    
        }
    } 
   

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
            <>
            <button onClick={joinRoom}  className='articlePerfilChat' key={user.id}>
            
        
          <img className='imgperfilChat' src={user.image}></img>
        

          <div className='containerTextChatPerfil'>
              <h3  className='nombrePerfilChat'>{user.name}</h3>
              <p className="ultimoMensajePerfilChat">ultimo mensaje</p>
            
          </div>

          

              </button>
              <div  className="linePerfilChat"></div>
              </>
          ))}  
          
          
           </div>



            

            <input type="text" placeholder="ID sala"
            onChange={e => setRoom(e.target.value)}/>

           {/*  <button onClick={joinRoom}>unirme</button>  */}
            </div>

            

       </> 
    )
}