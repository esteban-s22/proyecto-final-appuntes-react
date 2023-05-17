import React, {useState} from 'react'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
    <h1>Inicio</h1>
    <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Buscar apuntes" className="form-control me-2"/>
    <button className="btn btn-primary mt-2" type="submit">
              Buscar apunte <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
   <path d="M21 21l-6 -6"></path>
</svg>
            </button>
  </div>
  )
}

export default Home

