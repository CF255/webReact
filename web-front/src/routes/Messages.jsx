import { useState } from "react";
import { PortalLayout } from "../layout/PortalLayout";
import io from "socket.io-client"
import "/public/css/chatmessages.css"
import Users from "../components/Chat/users";
import Chat from "../components/Chat/chat";
import { useUsers } from "../hooks/FetchUsers/useUser";

const socket = io.connect("http://localhost:3100")

export default function Messages(){

    const {users} = useUsers() 

   
    const [showChat, setShowChat] = useState(false)

    

    return(
       <PortalLayout>

        <div className="chat-Container">

       <div className="chatOnline">
       {/* { !showChat ?( */}

            <Users users={users} joinRoom={joinRoom} socket={socket} setUsername={setUsername} setRoom={setRoom}/>

        {/* ) : ( */}

            <div className="chat-messages-container">
            <Chat socket={socket} username={username} room={room}/>
            </div>
       {/*  )} */}

        </div>
        </div>
       </PortalLayout> 
    )
}