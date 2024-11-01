import './Header.css'

export function Header (props) {
  const { inicioIsVisible, biografiaIsVisible, toggleBiografia, toggleInicio } = props

  function handleInicio () {
    if (!inicioIsVisible) {
      toggleInicio(true)
      toggleBiografia(false)
    }
  }
  function handleBiografia () {
    if (!biografiaIsVisible) {
      toggleBiografia(true)
      toggleInicio(false)
    }
  }

  return (
    <header>
      <nav>
        <div onClick={handleInicio}>
          <strong>INICIO</strong>
        </div>
        <div onClick={handleBiografia}>
          <strong>BIOGRAFIA</strong>
        </div>
        <div>
          <strong>DISCOGRAFIA</strong>
        </div>
        <div>
          <strong>VIDEOCLIPS</strong>
        </div>
        <div>
          <strong>SHOWS</strong>
        </div>
        <div>
          <strong>IMAGENES</strong>
        </div>
        <div>
          <strong>CONTACTO</strong>
        </div>
      </nav>
    </header>
  )
}
