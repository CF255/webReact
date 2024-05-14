import "/public/css/modal.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faX} from "@fortawesome/free-solid-svg-icons";
import { Children, useState } from "react";
import styled from 'styled-components'


function ModalMessage  ({btnAbrirModal,btnAbrirModalCss ,children}){
    const [modal, setModal] = useState('')

    const handleCerrarModal = () =>{
        setModal(!modal)
    }

    return(


        <>

        <button onClick={handleCerrarModal} className={` ${btnAbrirModalCss} ${modal? 'activemodal' : ''}`}>{btnAbrirModal}</button> 

           
          <div className={`modalContainer ${modal? 'activemodal' : ''}`}>
          <div className="modalMessage">
            <div className="btnModalCerrar">
                <a onClick={handleCerrarModal}><FontAwesomeIcon icon={faX}/></a>
            </div>
           {children} 
          </div>
        </div>
        </>
    )
}


export {ModalMessage}