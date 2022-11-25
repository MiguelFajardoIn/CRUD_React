import {Schema,models,model} from 'mongoose'

const userSchema = new Schema({
    nombre:String,
    apellido:String,
    edad:Number,
    telefono:String
})


const Users=models.user || model('user'.userSchema)
export default Users