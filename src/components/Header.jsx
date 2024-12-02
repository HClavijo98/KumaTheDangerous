import './Header.css'
import { useState } from 'react' // Asegúrate de importar useState
import { Link } from './Link'

export function Header (props) {
  const [menuOpen, setMenuOpen] = useState(false) // Estado para el menú hamburguesa

  return (
    <header>
      <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        {/* Icono del menú hamburguesa */}
        <span className={`bar ${menuOpen ? 'open' : ''}`} />
        <span className={`bar ${menuOpen ? 'open' : ''}`} />
        <span className={`bar ${menuOpen ? 'open' : ''}`} />
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to='/'>INICIO</Link>
        <Link to='/biografia'>BIOGRAFIA</Link>
        <Link to='/musica'>MUSICA</Link>
        <Link to='/videoclips'>VIDEOCLIPS</Link>
        <Link to='/produccion'>PRODUCCION</Link>
        <Link to='/contacto'>CONTACTO</Link>
      </nav>
    </header>
  )
}
