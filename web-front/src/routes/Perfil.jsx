import { useAuth } from "../auth/AuthProvider"
import PortalLayout from "../layout/PortalLayout"
import fondogrande from "/public/img/fondoperfilgrande.png"
import fondoperfil from "../../public/img/logoperfil.png"
import "../../public/css/perfil.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUser, faLock, faCamera, faPen} from "@fortawesome/free-solid-svg-icons";


export default function Perfil(){
    
    const auth = useAuth()

    return(

      <PortalLayout>

        <section className="seccion-perfil-usuario">
            <div className="perfil-usuario-header">
                <div className="perfil-usuario-portada">
                <div className="perfil-usuario-avatar">
                    <img src={fondoperfil} alt="img-avatar" />
                    <button className="boton-avatar"><FontAwesomeIcon style={{color: '#000'}} icon={faCamera}/></button>
                </div>
                <button className="boton-portada"><FontAwesomeIcon style={{color: '#fff'}} icon={faCamera}/></button>
                </div>
            </div>

            <div className="perfil-usuario-body">
                <div className="perfil-usuario-bio">
                    <h3 className="titulousuario">{auth.getUser()?.name ?? ""}</h3>
                    <p className="nombre-usuario">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolor atque, exercitationem quod harum, fugiat non similique id perspiciatis suscipit nisi, qui repudiandae ducimus rerum sint vitae eligendi hic iure.</p>
                </div>
                <div className="perfil-usuario-footer">
                    <ul className="lista-datos">
                        <li className="icon-image">Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li className="icon-image">Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                        <li className="icon-image">Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>  
                    </ul>
                </div>
            </div>
        </section>
        
      </PortalLayout>
        
    )
}