import { useState } from "react";
import { PortalLayout } from "../layout/PortalLayout";
import io from "socket.io-client"
import Chat from "../components/Chat/chat";

const socket = io.connect("http://localhost:3100")

export default function Messages(){

    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')
    const [showChat, setShowChat] = useState(false)

    const joinRoom = () =>{
        if(username != "" && room != ''){
            socket.emit("join_room", room)
            setShowChat(true)
        }
    }

    return(
       <PortalLayout>

        <div className="seccion-perfil-usuario chat-Container">

       
       <div className="perfil-usuario-body chatOnline">
       { !showChat ?(
        <div className="perfil-usuario-bio">
            <h3>Unirme al chat</h3>
            <input type="text" placeholder="Usuario"
            onChange={e => setUsername(e.target.value)}/>

            <input type="text" placeholder="ID sala"
            onChange={e => setRoom(e.target.value)}/>

            <button onClick={joinRoom}>unirme</button>
            </div>

        ) : (

            <div className="perfil-usuario-bio">
            <Chat socket={socket} username={username} room={room}/>
            </div>
        )}

        </div>
        </div>
       </PortalLayout> 
    )
}