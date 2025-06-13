import { useState } from 'react'

import './App.css'

function App() {
  //aqui van las constantes
  return (
      <div className="container-fluid">
        <div className="contenedor1">
            <div className="header">
            </div>
            <div className="section">
                <fieldset className="text-center">
                    <h1>Iniciar Sesión</h1>
                    <br /><br />
                    <label htmlFor="usuario">Nombre:</label>
                    <input type="text" id="usuario" placeholder="Nombre de usuario" name="usuario" />
                    <br /><br /><br />
                    <label htmlFor="Gmail">Gmail:</label>
                    <input type="text" id="Gmail" placeholder="Gmail de usuario" name="Gmail" />
                    <br /><br /><br />
                    <label htmlFor="Contraseña">Contraseña:</label>
                    <input type="text" id="Contraseña" placeholder="Contraseña de usuario" name="contraseña" />
                </fieldset>
            </div>
            <div className="footer">
                <a href="https://github.com/dashboard">DG288</a>
            </div>
        </div>
    </div>
  );
}

export default App
