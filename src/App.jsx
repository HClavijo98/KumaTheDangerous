import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Inicio } from './components/Inicio.jsx'
import { Biografia } from './components/Biografia.jsx'
// import { Videoclips } from './components/Videoclips.jsx'
// import { Contacto } from './components/Contacto.jsx'
// import { Musica } from './components/Musica.jsx'
// import { Produccion } from './components/Produccion.jsx'
import { Footer } from './components/Footer.jsx'
// import { useState } from 'react'
import '@madzadev/audio-player/dist/index.css'
import { Switch, Router, Route } from 'wouter'

export function App () {
  const [inicioIsVisible, setInicioIsVisible] = useState(true)
  const [biografiaIsVisible, setBiografiaIsVisible] = useState(false)
  const [videoIsVisible, setVideoIsVisible] = useState(false)
  const [musicaIsVisible, setMusicaIsVisible] = useState(false)
  const [prodIsVisible, setProdIsVisible] = useState(false)
  const [contactoIsVisible, setContactoIsVisible] = useState(false)

  // function toggleInicio (bool) {
  //   setInicioIsVisible(bool)
  // }
  // function toggleBiografia (bool) {
  //   setBiografiaIsVisible(bool)
  // }
  // function toggleVideo (bool) {
  //   setVideoIsVisible(bool)
  // }
  // function toggleContacto (bool) {
  //   setContactoIsVisible(bool)
  // }
  // function toggleMusica (bool) {
  //   setMusicaIsVisible(bool)
  // }
  // function toggleProduccion (bool) {
  //   setProdIsVisible(bool)
  // }
  return (
    <>
      <Header />
      <Router base='/KumaTheDangerous'>
        <Switch>
          <Route path='/' component={Inicio} />
          <Route path='/biografia' component={Biografia} />
          <Route>404: No such page!</Route>
        </Switch>
      </Router>
      <Footer />
      {/* <Inicio inicioIsVisible={inicioIsVisible} />
        <Biografia biografiaIsVisible={biografiaIsVisible} />
        <Videoclips videoIsVisible={videoIsVisible} />
        <Musica musicaIsVisible={musicaIsVisible} />
        <Produccion prodIsVisible={prodIsVisible} />
        <Contacto contactoIsVisible={contactoIsVisible} /> */}
    </>
  )
}
