import React from 'react'

const Registrarse = () => {
  return (
    <div className=" col-5 position-absolute top-50 start-50 translate-middle " >
        
    <form id="form_login" className=" text-center" > 
        <div>
            <h1 style={{color:"green", textalign:"center"}}>NUEVA CUENTA</h1>
            <h3 style={{color:"black", textaling:"center"}}>Es Simple y Seguro</h3>
            
        
            
        </div>
        <div>
            <input placeholder="Nombre"type="text" id="txtpas"  className="form-control"  required/>
        </div>
        <br/>
        <div>
      
        
                    <input placeholder="Apellido" type="txtpas" id="txtpas"  className="form-control "  required/>
        </div>
        <br/>
        <div>
              <input placeholder="Email" type="txtpas" id="txtpas"  className="form-control "  required/>
        </div>
        <br/>
        <div>
              <input placeholder="Contraseña" type="password" id="txtpas"  className="form-control "  required/>  
              </div>
              <br/>
              <div>
                    <input placeholder="Confirmar Contraseña" type="password" id="txtpas"  className="form-control "  required/>

              </div>
              <br/>
              
                    <input  type="button" className="btn btn-secondary" value="Cancelar"/>
        &nbsp; 
        &nbsp; 

        <input type="submit" className="btn btn-success" value="Registrarse"/>
        
        
        
    </form>

</div>

  )
}

export default Registrarse 