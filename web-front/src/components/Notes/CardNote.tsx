import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const CardNote = (props) =>{

    return(
        <>
        <div className="cardNoteWrapper">

            <div className="cardBodyNote">
            <h2>{props.title}</h2>
            <p>{props.descripcion}</p>
            </div>

            <div className="cardFooterNote">
                
                <a href="" title="Editar" onClick={(e) =>{
                    e.preventDefault()
                    props.onEdit()
                }}>   <FontAwesomeIcon style={{color: '#acacac'}} icon={faPen}/></a>

                <a href="" title="Eliminar" onClick={(e) =>{
                    e.preventDefault()
                    props.onRemove()
                }}> <FontAwesomeIcon style={{color: '#d77f13'}} icon={faTrash}/></a>
            </div>
        </div>
        </>
    )

}


export default CardNote