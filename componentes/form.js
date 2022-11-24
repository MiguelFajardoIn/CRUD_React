import { useReducer } from "react"


const formReducer = (state,event)=>{
    return{
        ...state,
        [event.target.name]:event.target.value
    }


}

export default function Form() {
    
    const [formData,setFormData] = useReducer(formReducer,{} )
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label >Nombre</label>
                <input type="text" onChange={setFormData} name="Nombre" className="form-control"  placeholder="Primer Nombre"/>
                
            </div>
            <div className="form-group">
                <label >Apellido</label>
                <input type="text" onChange={setFormData} name="Apellido" className="form-control" placeholder="Apellido"/>
            </div>
            <div className="form-group">
                <label >Edad</label>
                <input type="text" onChange={setFormData} name="Edad" className="form-control"  placeholder="Edad"/>
            </div>
            <div className="form-group">
                <label >Telefono</label>
                <input type="text" onChange={setFormData} name="Telefono" className="form-control"  placeholder="Telefono"/>
            </div>
            <div className="mt-3">
            <button className="btn btn-primary " type="submit"  onSubmit={handleSubmit}>Agregar</button>
            </div>
        </form>
        

    )
}