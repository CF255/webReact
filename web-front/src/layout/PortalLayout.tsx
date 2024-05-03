import React, { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Link } from "react-router-dom";
import { API_URL } from "../auth/constants";
import '../../public/css/portallayout.css'
import BurgerButton from  '../components/BurgerButton'
import PerfilInformation from "../components/PerfilInformation";


export default function PortalLayout({children}: {children: React.ReactNode}){

    const [clicked, setClicked] = useState(false)
    const auth = useAuth()


    async function handleSignOut(e: React.MouseEvent<HTMLAnchorElement>){
        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/signout`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "aaplication/json",
                    Authorization: `Bearer ${auth.getRefreshToken()}`
                }
            })

            if(response.ok){
                auth.signout()
            }
        } catch (error) {
            
        }
       
    }

    const handleaMenu = () =>{
        setClicked(!clicked)
    }



   

    return(
        <>
        <header className="navcontainer">
            <Link to={"/dashboard"}>
            <img className="logo" src="/img/logo.png" alt="" />
            </Link>
            <nav>
                <ul className={`links ${clicked? 'active' : ''}`}>
                    <li>
                        <Link  to="/dasboard">...</Link>
                    </li>
                    <li>
                        <Link  to="/me">...</Link>
                    </li>
                    <li className="liperfil">
                    <PerfilInformation />
                    </li>
                    <li>
                        <a className="btnsignout" href="#" onClick={handleSignOut}>sign out</a>
                    </li>

                </ul>

                <div className="burgerbtn" onClick={handleaMenu}>
                <BurgerButton/>
                </div>
        
            </nav>
          
        </header>
        <div>
        <div className={`initial ${clicked? 'active' : ''}`}></div>
        <div className={`circulo1 ${clicked? 'active' : ''}`}></div>
        <div  className={`circulo2 ${clicked? 'active' : ''}`}></div>
        <div  className={`circulo3 ${clicked? 'active' : ''}`}></div>
       </div>    
                   

    <main>
    {children}
    </main>
        </>


    )
}