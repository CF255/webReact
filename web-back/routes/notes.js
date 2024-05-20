
import jsonResponse from "../lib/jsonResponse.js";
import { Router } from 'express'
import Note from "../schema/note.js";
import User from "../schema/user.js";


const router = Router();

 router.get("/", async  (req, res, )=> {

    try {
        const notes = await Note.find({})
        res.send(notes)
        
    } catch (error) {
        console.log(erro)
        res.status(500).send(error)
    }
  
}); 


/* router.get('/', async (request, response) => { 
    const notes = await Note
      .find({}).populate('user', { username: 1, name: 1 })
    
    response.json(notes)
  }) */

/* router.post('/', async (req, res) =>{

   try {
    const note = await Note.create(req.body)
    res.send(note)
   } catch (error) {
    res.status(500).send(error)
   }
}) */

router.post('/', async (req, res) =>{

    const {title, description, userId} = req.body

     const user = await User.findById(userId)


    const newNote = new Note({
        title,
        description,
        user: user.toJSON().id
      });

      const saveNote = await newNote.save();
      user.notes = user.notes.concat(saveNote.id);
      await user.save();
    
      response.status(200).json(populatedBlog.toJSON());

 })

router.get('/:id', async(req, res)=>{
    try {
       const note = await Note.findById(req.params.id)
       res.send(note)
    } catch (error) {
       console.log(error)
       res.status(500).send(error) 
    }
})


router.put('/:id', async(req, res)=>{
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.send(note)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})


router.delete('/:id', async(req, res)=>{
    try {
        const note = await Note.findByIdAndDelete(req.params.id)
        res.send(note)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})



export default router
