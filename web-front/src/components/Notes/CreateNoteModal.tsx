import { MouseEventHandler, useState } from "react"
import Modal from "./common/Modal"
import { createNote } from "../../service/Note/noteservices"


const CreateNoteModal = (props) =>{
    const [form, setForm] = useState({
        title: '',
        description: ''
    })

    
    function handleInputOnChange(e){
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value,
        })

    }

    async function handleGuardar(){
        try {
        await createNote(form)
            props.onCreate()
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <Modal isOpen={props.isOpen} onAccept={handleGuardar} onClose={props.onClose}
        title="Nueva nota">
           

            <div className="formGroup">
                <label className="FormLabel" htmlFor="title">Título</label>
                <input className="FormInput" type="text" name="title" id="title" onChange={handleInputOnChange}></input>
            </div>

            <div className="formGroup">
                <label className="FormLabel" htmlFor="description">Descripción</label>
                <textarea className="FormTextArea" name="description" id="description" rows={5} onChange={handleInputOnChange}></textarea>
            </div>
        </Modal>
    )
}

export default CreateNoteModal