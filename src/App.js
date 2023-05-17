import './App.css';

import{ BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import Login  from './Components/Login'
import Registrarse  from './Components/Registrarse'
import Layout from './Components/Layout';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div classname="App">


      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registrarse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
