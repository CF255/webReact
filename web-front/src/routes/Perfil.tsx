import { useAuth } from "../auth/AuthProvider"
import { PortalLayout } from "../layout/PortalLayout";
import fondoperfil from "../../public/img/logoperfil.png"
import "../../public/css/perfil.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCamera, faPen,faWarning} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import { API_URL } from "../auth/constants"
import { ModalMessage } from "../components/ModalMessages/Modal"
import "../../public/css/login-signup.css"
import Allusers from "../service/users";





export default function Perfil(){
    
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
   const [errorResponse, setErrorResponse] = useState("");
  const [missResponse, setMissResponse] = useState("");


    const auth = useAuth()

    async function handleEliminarCuenta (){

      try {
        const response = await fetch(`${API_URL}/perfil/delete/${auth.getUser()?.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "aplication/json",
            Authorization: `Bearer ${auth.getAccessToken()}`,
        }
        });

        if(response.ok){
          
      }
         
      } catch (error) {
        auth.signout()
        console.log(error);
      }

    }



    async function handleGuardar() {
     
      console.log(name, username, password );

      if (!username || !password || !name) {
        setMissResponse('Complete todos los campos');

        setTimeout(() => {
          setMissResponse('')
          }, 2000);


        console.log('vacio')
      }else{

        try {
          const response = await fetch(`http://localhost:3100/api/perfil/${auth.getUser()?.id}/${name}/${username}/${password}`, {
            method: "PUT",
            headers: {
              "Content-Type": "aplication/json",
              Authorization: `Bearer ${auth.getAccessToken()}`,
             },
             body: JSON.stringify({ username })
          });
           
            if(response.ok){
              
              console.log('si')
            } else {
              auth.signout()
              console.log('response')
     
            }

        } catch (error) {
          console.log(error);
        }

      }
    
  

    }
  
    


    return(

      <PortalLayout>

        <section className="seccion-perfil-usuario">
            <div className="perfil-usuario-header">
                <div className="perfil-usuario-portada">
                <div className="perfil-usuario-avatar">
                    <img src={fondoperfil} alt="img-avatar" />
                    <button className="boton-avatar"><FontAwesomeIcon style={{color: '#000'}} icon={faPen}/> </button>
                </div>
                <button className="boton-portada"><FontAwesomeIcon style={{color: '#fff'}} icon={faCamera}/></button>
                </div>
            </div>

            <div className="perfil-usuario-body">
                <div className="perfil-usuario-bio">
                    <h3 className="titulousuario">{auth.getUser()?.name ?? ""}</h3>
                    <p className="nombre-usuario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolor atque, exercitationem quod harum, fugiat non similique id perspiciatis suscipit nisi, qui repudiandae ducimus rerum sint vitae eligendi hic iure.</p>

                    <div className="perfil-usuario-acciones">
                    
                  <button className="btn-acciones-usuario">accion1</button>
                  <button className="btn-acciones-usuario">accion2</button>
                  <button className="btn-acciones-usuario">accion3</button>
                  {/* modal editar perfil */}
                  <ModalMessage
                  btnAbrirModal="Editar Perfil"
                  btnAbrirModalCss="btn-acciones-usuario"
                  >
                      <div className="modalTitulo">
              <h3> Editar perfil</h3>
            </div>
            <div className="modalContenidoEditarUsuario">

            <div className="modalmessage">
    {!!errorResponse && <div className="errormessage">{errorResponse}</div>}
    {!!missResponse && <div className="missmessage">{missResponse}</div>}
    </div> 

              <label >Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              <label >Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
              <label >Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            </div>
            <div className="btnFinalModal">
                <button  onClick={handleGuardar}  className="btnGuardarModal">Guardar</button>
            </div> 

                  </ModalMessage>
                   {/* modal editar perfil */}
                </div>
                   
                </div>

                <div className="perfil-usuario-amigos">
                 <h2>Amigos</h2>
                 <Allusers/>

                </div>

                
                <div className="perfil-usuario-footer">
                 

                 {/* Modal Eliminar Cuenta */}
                <ModalMessage
                btnAbrirModal = "Eliminar Cuenta"
                btnAbrirModalCss='btnEliminarModal'
                >
            <div className="modalTitulo">
              <h3><FontAwesomeIcon style={{color: "b56c0d"}} icon={faWarning}/> Advertencia</h3>
            </div>
            <div className="modalContenido">
              <span>Este paso es definitivo. Todos tus datos, enlaces, publicaciones, etc serán borrados y no podrán ser restaurados. Tampoco tendrás acceso a dicha cuenta nuevamente.
              </span>
            </div>
            <div className="btnFinalModal">
                <button  onClick={handleEliminarCuenta}  className="btnEliminarModal">Aceptar</button>
            </div> 
              </ModalMessage>
                {/* Fin Modal Eliminar Cuenta */}

                </div>

      
                
            </div>
        </section>

      
        
      </PortalLayout>
        
    )
  }