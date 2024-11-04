import './Header.css'

export function Header (props) {
  const { inicioIsVisible, biografiaIsVisible, videoIsVisible, toggleBiografia, toggleInicio, toggleVideo } = props

  function handleInicio () {
    if (!inicioIsVisible) {
      toggleInicio(true)
      toggleBiografia(false)
      toggleVideo(false)
    }
  }
  function handleBiografia () {
    if (!biografiaIsVisible) {
      toggleBiografia(true)
      toggleInicio(false)
      toggleVideo(false)
    }
  }
  function handleVideo () {
    if (!videoIsVisible) {
      toggleVideo(true)
      toggleInicio(false)
      toggleBiografia(false)
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
