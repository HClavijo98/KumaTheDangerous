import './Header.css'
import { useState } from 'react' // Asegúrate de importar useState

export function Header (props) {
  const { inicioIsVisible, biografiaIsVisible, videoIsVisible, contactoIsVisible, musicaIsVisible, toggleBiografia, toggleInicio, toggleVideo, toggleContacto, toggleMusica } = props
  const [menuOpen, setMenuOpen] = useState(false) // Estado para el menú hamburguesa

  function handleInicio () {
    if (!inicioIsVisible) {
      toggleInicio(true)
      toggleBiografia(false)
      toggleMusica(false)
      toggleVideo(false)
      toggleContacto(false)
      setMenuOpen(false) // Cerrar el menú al seleccionar
    }
  }
  function handleBiografia () {
    if (!biografiaIsVisible) {
      toggleBiografia(true)
      toggleInicio(false)
      toggleMusica(false)
      toggleVideo(false)
      toggleContacto(false)
      setMenuOpen(false) // Cerrar el menú al seleccionar
    }
  }
  function handleVideo () {
    if (!videoIsVisible) {
      toggleVideo(true)
      toggleInicio(false)
      toggleBiografia(false)
      toggleMusica(false)
      toggleContacto(false)
      setMenuOpen(false) // Cerrar el menú al seleccionar
    }
  }
  function handleContacto () {
    if (!contactoIsVisible) {
      toggleContacto(true)
      toggleInicio(false)
      toggleBiografia(false)
      toggleMusica(false)
      toggleVideo(false)
      setMenuOpen(false) // Cerrar el menú al seleccionar
    }
  }
  function handleMusica () {
    if (!musicaIsVisible) {
      toggleMusica(true)
      toggleInicio(false)
      toggleBiografia(false)
      toggleVideo(false)
      toggleContacto(false)
      setMenuOpen(false) // Cerrar el menú al seleccionar
    }
  }

  return (
    <header>
      <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        {/* Icono del menú hamburguesa */}
        <span className={`bar ${menuOpen ? 'open' : ''}`} />
        <span className={`bar ${menuOpen ? 'open' : ''}`} />
        <span className={`bar ${menuOpen ? 'open' : ''}`} />
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <div onClick={handleInicio}>
          INICIO
        </div>
        <div onClick={handleBiografia}>
          BIOGRAFIA
        </div>
        <div onClick={handleMusica}>
          MUSICA
        </div>
        <div onClick={handleVideo}>
          VIDEOCLIPS
        </div>
        <div onClick={handleContacto}>
          CONTACTO
        </div>
      </nav>
    </header>
  )
}
