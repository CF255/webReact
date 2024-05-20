import { Model, Schema, model } from "mongoose";
import mongoose from "mongoose";


const noteSchema = new Schema({

    title:{
        type:String,
    },
    description:{
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })


export default model("Note", noteSchema)