import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Header } from './components/Header.jsx'
import { Inicio } from './components/Inicio.jsx'
import { Biografia } from './components/Biografia.jsx'
import { Videoclips } from './components/Videoclips.jsx'
import { Contacto } from './components/Contacto.jsx'
import { Musica } from './components/Musica.jsx'
import { Produccion } from './components/Produccion.jsx'
import { Footer } from './components/Footer.jsx'
import { useState } from 'react'
import '@madzadev/audio-player/dist/index.css'

export function App () {
  const [inicioIsVisible, setInicioIsVisible] = useState(true)
  const [biografiaIsVisible, setBiografiaIsVisible] = useState(false)
  const [videoIsVisible, setVideoIsVisible] = useState(false)
  const [musicaIsVisible, setMusicaIsVisible] = useState(false)
  const [prodIsVisible, setProdIsVisible] = useState(false)
  const [contactoIsVisible, setContactoIsVisible] = useState(false)

  function toggleInicio (bool) {
    setInicioIsVisible(bool)
  }
  function toggleBiografia (bool) {
    setBiografiaIsVisible(bool)
  }
  function toggleVideo (bool) {
    setVideoIsVisible(bool)
  }
  function toggleContacto (bool) {
    setContactoIsVisible(bool)
  }
  function toggleMusica (bool) {
    setMusicaIsVisible(bool)
  }
  function toggleProduccion (bool) {
    setProdIsVisible(bool)
  }
  return (
    <>
      <Header
        toggleInicio={toggleInicio} inicioIsVisible={inicioIsVisible}
        toggleBiografia={toggleBiografia} biografiaIsVisible={biografiaIsVisible}
        toggleVideo={toggleVideo} videoIsVisible={videoIsVisible}
        toggleMusica={toggleMusica} musicaIsVisible={musicaIsVisible}
        toggleProduccion={toggleProduccion} prodIsVisible={prodIsVisible}
        toggleContacto={toggleContacto} contactoIsVisible={contactoIsVisible}
      />
      <div className='main'>
        <Inicio inicioIsVisible={inicioIsVisible} />
        <Biografia biografiaIsVisible={biografiaIsVisible} />
        <Videoclips videoIsVisible={videoIsVisible} />
        <Musica musicaIsVisible={musicaIsVisible} />
        <Produccion prodIsVisible={prodIsVisible} />
        <Contacto contactoIsVisible={contactoIsVisible} />
      </div>
      <Footer />
    </>
  )
}
