import { Link } from 'wouter'
import './Header.css'
import { useState } from 'react' // Asegúrate de importar useState

export function Header (props) {
  const { inicioIsVisible, biografiaIsVisible, videoIsVisible, musicaIsVisible, prodIsVisible, contactoIsVisible, toggleBiografia, toggleInicio, toggleVideo, toggleMusica, toggleProduccion, toggleContacto } = props
  const [menuOpen, setMenuOpen] = useState(false) // Estado para el menú hamburguesa

  function handleInicio () {
    if (!inicioIsVisible) {
      toggleInicio(true)
      toggleBiografia(false)
      toggleMusica(false)
      toggleVideo(false)
      toggleProduccion(false)
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
      toggleProduccion(false)
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
      toggleProduccion(false)
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
      toggleProduccion(false)
      setMenuOpen(false) // Cerrar el menú al seleccionar
    }
  }
  function handleMusica () {
    if (!musicaIsVisible) {
      toggleMusica(true)
      toggleInicio(false)
      toggleBiografia(false)
      toggleVideo(false)
      toggleProduccion(false)
      toggleContacto(false)
      setMenuOpen(false) // Cerrar el menú al seleccionar
    }
  }
  function handleProduccion () {
    if (!prodIsVisible) {
      toggleProduccion(true)
      toggleInicio(false)
      toggleBiografia(false)
      toggleMusica(false)
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

        <Link href='/KumaTheDangerous'>INICIO</Link>

        <Link href='/biografia'>BIOGRAFÍA</Link>

        <div onClick={handleMusica}>
          MÚSICA
        </div>
        <div onClick={handleVideo}>
          VIDEOCLIPS
        </div>
        <div onClick={handleProduccion}>
          PRODUCCIÓN
        </div>
        <div onClick={handleContacto}>
          CONTACTO
        </div>
      </nav>
    </header>
  )
}
