import './Header.css'
import { useState } from 'react' // Asegúrate de importar useState

export function Header (props) {
  const { inicioIsVisible, biografiaIsVisible, videoIsVisible, toggleBiografia, toggleInicio, toggleVideo } = props
  const [menuOpen, setMenuOpen] = useState(false) // Estado para el menú hamburguesa

  function handleInicio () {
    if (!inicioIsVisible) {
      toggleInicio(true)
      toggleBiografia(false)
      toggleVideo(false)
      setMenuOpen(false) // Cerrar el menú al seleccionar
    }
  }
  function handleBiografia () {
    if (!biografiaIsVisible) {
      toggleBiografia(true)
      toggleInicio(false)
      toggleVideo(false)
      setMenuOpen(false) // Cerrar el menú al seleccionar
    }
  }
  function handleVideo () {
    if (!videoIsVisible) {
      toggleVideo(true)
      toggleInicio(false)
      toggleBiografia(false)
      setMenuOpen(false) // Cerrar el menú al seleccionar
    }
  }

  return (
    <header>
      <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        {/* Icono del menú hamburguesa */}
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <div onClick={handleInicio}>
          <strong>INICIO</strong>
        </div>
        <div onClick={handleBiografia}>
          <strong>BIOGRAFIA</strong>
        </div>
        <div>
          <strong>DISCOGRAFIA</strong>
        </div>
        <div onClick={handleVideo}>
          <strong>VIDEOCLIPS</strong>
        </div>
        <div>
          <strong>CONTACTO</strong>
        </div>
      </nav>
    </header>
  )
}
