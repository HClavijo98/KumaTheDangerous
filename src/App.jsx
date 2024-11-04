import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Header } from './components/Header.jsx'
import { Inicio } from './components/Inicio.jsx'
import { Biografia } from './components/Biografia.jsx'
import { Videoclips } from './components/Videoclips.jsx'
import { Footer } from './components/Footer.jsx'
import { useState } from 'react'

export function App () {
  const [inicioIsVisible, setInicioIsVisible] = useState(true)
  const [biografiaIsVisible, setBiografiaIsVisible] = useState(false)
  const [videoIsVisible, setVideoIsVisible] = useState(false)

  function toggleInicio (bool) {
    setInicioIsVisible(bool)
  }
  function toggleBiografia (bool) {
    setBiografiaIsVisible(bool)
  }
  function toggleVideo (bool) {
    setVideoIsVisible(bool)
  }
  return (
    <>
      <Header
        toggleInicio={toggleInicio} inicioIsVisible={inicioIsVisible}
        toggleBiografia={toggleBiografia} biografiaIsVisible={biografiaIsVisible}
        toggleVideo={toggleVideo} videoIsVisible={videoIsVisible}
      />
      <div className='main'>
        <Inicio inicioIsVisible={inicioIsVisible} />
        <Biografia biografiaIsVisible={biografiaIsVisible} />
        <Videoclips videoIsVisible={videoIsVisible} />
      </div>
      <Footer />
    </>
  )
}
