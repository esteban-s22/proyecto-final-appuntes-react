import React, {useEffect} from 'react'
import {Outlet, Link} from 'react-router-dom'
import "../Components/styles/Home.css"

export const Layout = () => {
  useEffect(() => {
    const toggle = document.querySelector('.toggle');
    const sideBar = document.querySelector('.sidebar-container');

    const handleClick = () => {
      sideBar.classList.toggle('toggle-function');
    };

    toggle.addEventListener('click', handleClick);

    return () => {
      toggle.removeEventListener('click', handleClick);
    };
  }, []);
  return (
   
    <html lang="es">
  
  <body>
     <h1>APPUNTES</h1> 
    <aside class="sidebar-container">
      <div class="toggle">
        <span class="lines"></span>
        <span class="lines"></span>
        <span class="lines"></span>
      </div>
      <div class="profile-and-links">
        PROFILE 
        
        MENU LIST
        <ul class="links-list">
           <Link to = "/"> 
          <li class="links">
          <a href=""><i class="fa-solid fa-house"></i>Home</a>
            
          </li>
          </Link>
          <Link to="/login">
          <li class="links">
             <a href=""><i class="fa-solid fa-newspaper"></i>Iniciar Sesion</a>
           
          </li></Link> <Link to="/register">
          <li class="links">
           <a href=""><i class="fa-solid fa-bookmark"></i>Registrarse</a>
            
          </li></Link>
         
          <li class="links">
            <a href=""><i class="fa-solid fa-address-card"></i>About</a>
          </li>
          <li class="links">
            <a href=""><i class="fa-solid fa-envelope"></i>Contact</a>
          </li>
          <li class="links">
            <a href=""><i class="fa-solid fa-gear"></i>Settings</a>
          </li>
        </ul>
      </div>
      
    </aside>
    
    
    <script src="script.js"></script>
  </body>
<Outlet/>
</html>















      
  )
}
export default Layout;
