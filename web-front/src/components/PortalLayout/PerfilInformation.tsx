
import { Link } from 'react-router-dom'
import '/img/logoperfil.png'
import { useAuth } from '../../auth/AuthProvider'
import '../../../public/css/perfilinformation.css'

function PerfilInformation(){

    const auth = useAuth()
    
    return(

        <>
        <article className='articleperfil'>
            <header className='headerperfil'>
                <img className='imgperfil' src="/img/logoperfil.png"></img>
                <div className='containerperfiltext'>
                    <strong className='stnombreperfil'>{auth.getUser()?.name || ""}</strong>
                    <span className='spusernameperfil'><Link className='aroutes'  to="/me">@{auth.getUser()?.username ?? ""}</Link></span>
                </div>
            </header>
        </article>
        </>
    )
}


export default PerfilInformation