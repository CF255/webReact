import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import ScrollToBottom from "react-scroll-to-bottom"


const Chat = ({socket, username, room}) =>{

    const [currentMessage, setCurrentMessage] = useState('')
    const [messagesList, setMessageList] = useState([])

    const sendMessage = async () =>{
        if(username && currentMessage){
            const info = {
                message: currentMessage,
                room,
                author: username,
                time: new Date(Date.now()).getHours() + ":"
                 + new Date(Date.now()).getMinutes() 
            }

            await socket.emit("send_message", info)
            setMessageList((list)=>[...list, info])
            setCurrentMessage('')
        }
    }

    useEffect(()=>{
        const messageHandle = (data) =>{
                setMessageList((list)=>[...list, data])
        }
        socket.on("receive_message", messageHandle)

        return () => socket.off("receive_message", messageHandle)
    },[socket])

    return(
        <>
        <div>
            <section className="chat-header">
                <p>{`Chat en vivo | sala: ${room}`}</p>
            </section>
            <ScrollToBottom>
            <section style={{height: 400}} className="chatMessages">
                
                {
                    messagesList.map((item, i)=>{
                        return (
                        <span key={i}>
                        <div style={{textAlign: username===item.author ? 'right' : 'left'}} className="messageContainer">
                            <div className="messageHeader">{item.message}</div>
                            <p>{item.author} <h4>{item.time}</h4></p>
                            
                        </div>
                        </span>
                        )
                    })
                }
            </section>
            </ScrollToBottom>
            <section className="chatFooter">
                <input value={currentMessage} type="text" placeholder="Mensaje..."
                     onChange={e => setCurrentMessage(e.target.value)} 
                     onKeyPress={(e)=>{if( e.key === "Enter") {sendMessage()}}}  />
                     
                <button onClick={sendMessage}><FontAwesomeIcon  icon={faPaperPlane}/></button>
            </section>
        </div>
        </>
    )
}

export default Chat