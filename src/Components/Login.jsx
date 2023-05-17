import React, { useState }from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const Login = () => {

    
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
      
        const handleEmailChange = (e) => {
          setEmail(e.target.value);
        };
      
        const handlePasswordChange = (e) => {
          setPassword(e.target.value);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          
          if (email === '' || password === '') {
            setError('Todos los campos son obligatorios.');{
              alert("Complete los datos faltantes!!")}
              
          } else if (!validateEmail(email)) {
            setError('Por favor, ingresa un email válido.');
          } else if (!validatePassword(password)) {
            setError('La contraseña debe tener al menos 8 caracteres alfanuméricos.');
          } else {
            
            setError('');
            setEmail('');
            setPassword('');
            alert('Registro exitoso!');
          }
        };
      
        const validateEmail = (email) => {
          
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
        };
      
        const validatePassword = (password) => {
         
          const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
          return passwordRegex.test(password);
        };
    
      
        return (

               <div className=" col-3 position-absolute top-50 start-50 translate-middle ">
                <form onSubmit={handleSubmit} className=" text-center">
                    
                <h1 style={{ color: "green", background:"White", textalign: "center" }}>APPUNTES</h1>
                <h2 style={{ color: "White", background:"Blue",textalign:"center" }}>Bienvenid@s</h2>
          
            {error && <p>{error}</p>}
            
            
              <div>
              
                <input placeholder="Email"type="text" id="txtusu"  className="form-control" onChange={handleEmailChange} />
               </div>
                <br/>
                <div>
              
                <input placeholder="Contraseña" type="password" id="txtpas"  className="form-control " onChange={handlePasswordChange} />
        </div>
        
        <br/>
        <div>
           
              <button style={{color:"White", background:"Green"}} class="btn btn-success" type="submit">Login</button>
              </div>
              <br/>
              &nbsp;
              <Link to="/register"><button style={{color:"White", background:"Blue"}} class="btn btn-primary" type= "button">Crear Nueva Cuenta</button></Link>
              
              <button type="button" class="btn btn-link">¿Olvidaste Tu Contraseña?</button>
           </form>
          </div>
         
        );
}

export default Login;