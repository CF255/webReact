import { PortalLayout } from "../layout/PortalLayout";
import "../../public/css/notes.css"
import SearchNotes from "../components/Notes/Search";
import NamePerfils from "../components/Perfil/NamePerfils";
import { useUsers } from "../hooks/FetchUsers/useUser";
import CardNote from "../components/Notes/CardNote";
import { useEffect, useState } from "react";
import { deleteNote, getNotes } from "../service/Note/noteservices";
import { Note } from "../types/types";
import ActionButton from "../components/Notes/ActionButton";
import CreateNoteModal from "../components/Notes/CreateNoteModal";
import EditNoteModal from "../components/Notes/EditNoteModal";


export default function Notes(){
    const [notes, setNotes] = useState<Note[]>([])
    const [filterNotes, setFilterNotes] = useState<Note[]>([])
    const [createNotemodalOpen, setCreateNotemodalOpen] = useState(false)
    const [noteToEdit, setNoteToEdit] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() =>{
        getnote()
    },[])

    useEffect(() =>{
       if(searchTerm){
        const filterNotes = getFilterNote()
        setFilterNotes(filterNotes)
       }
    }, [searchTerm])

    function getFilterNote(){
        const filterNotes = notes.filter((note) =>{
            return note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
            note.description.toLowerCase().includes(searchTerm.toLowerCase())
        })

        return filterNotes
    }

    async function getnote() {
        const notes = await getNotes()
        setNotes(notes)
    }

   
    async function handleOnCreate(){
    setCreateNotemodalOpen(false)
    await getnote()
    }


    function handleOnEditNote(note){
        setNoteToEdit(note)
    }

    async function handleOnRemoveNote(id:string){
        try {
            await  deleteNote(id)
            await getnote()
        } catch (error) {
            console.error(error)
        }
    }

   async function handleonEdit(){
    setNoteToEdit(null)
    await getnote()
    }


    const {users} = useUsers() 

    return(
    
        <PortalLayout>
        <section className="seccion-perfil-usuario">
            <div className="perfil-usuario-bodyNotes">
                <div className="perfil-usuario-Notes">

            <div className="contaninerMainTitle">
             <h1>Notas</h1>
            </div>
            <div className="containerSearchNotes">
                <SearchNotes onSearch={(value) => setSearchTerm(value)}/>
            </div>
            <div className="containerObjetsNotes">
                <div className="containerNoteName">
                <h3>Notas de</h3>
                <NamePerfils users={users}/>
                </div>
                <div>
                <ActionButton onClick={() => setCreateNotemodalOpen(true)}/>
                </div>  
                </div>
            </div>
            <div className="cardNoteGrid">
                {(filterNotes.length > 0 && searchTerm != '' ? [...filterNotes] : [...notes]).map((note: Note) =>(
                <CardNote
                 key={note._id} 
                title={note.title} 
                descripcion={note.description}
                onEdit={() => handleOnEditNote(note)}
                onRemove={() =>handleOnRemoveNote(note._id)}
                />
                ))}
            </div>

            <CreateNoteModal 
            isOpen={createNotemodalOpen} 
            onClose={() => setCreateNotemodalOpen(false)}
            onCreate={handleOnCreate}
            />

            {noteToEdit != null &&
            <EditNoteModal 
            note={noteToEdit}
            isOpen
            onClose={() => setNoteToEdit(null)}
            onEdit={handleonEdit}
            />}
            </div>
        </section>
        </PortalLayout>
    )
}