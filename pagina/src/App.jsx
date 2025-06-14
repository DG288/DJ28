import { useState } from 'react'

import './App.css'

function App() {
  //aqui van las constantes
    const [nombre ,setNombre] = useState("")
    const [gmail, setGmail] = useState("")
    const [contraseña, setContraseña] = useState("")

    const handleSubmit =(e) => {
    e.preventDefault();
    console.log({nombre, gmail, contraseña});

    }
  return (

      <div className="container-fluid">
        <div className="contenedor1">
            <div className="section">
                <form onSubmit={handleSubmit}>
                    <fieldset className="text-center input-group">
                        <h1>Iniciar Sesión</h1>
                        <label htmlFor="usuario">Nombre:</label>
                        <input type="text" value={nombre} onChange ={ (e) => setNombre(e.target.value)} placeholder="Nombre de usuario"></input>

                        <label htmlFor="gmail">Gmail:</label>
                        <input type="text" value={gmail} onChange ={ (e) => setGmail(e.target.value)} placeholder="Gmail de usuario"></input> 

                        <label htmlFor="contraseña">Contraseña:</label>
                        <input type="text" value={contraseña} onChange ={(e) => setContraseña(e.target.value)} placeholder="Contraseña de usuario"></input>
                        <button type="submit">Iniciar sesión</button>
                    </fieldset>
                </form>
            </div>
            <div className="footer">
                <a href="https://github.com/dashboard">DG288</a>
            </div>
        </div>
    </div>
  );
}

export default App
