import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Router } from './components/Router.jsx'
import { Route } from './components/Route.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Page404 } from './components/Page404'
import { lazy, Suspense } from 'react'
import '@madzadev/audio-player/dist/index.css'

const Inicio = lazy(() => import('./components/Inicio.jsx'))
const Biografia = lazy(() => import('./components/Biografia.jsx'))
const Videoclips = lazy(() => import('./components/Videoclips.jsx'))
const Contacto = lazy(() => import('./components/Contacto.jsx'))
const Musica = lazy(() => import('./components/Musica.jsx'))
const Produccion = lazy(() => import('./components/Produccion.jsx'))

export function App () {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading ...</div>}>
        <Router defaultComponent={Page404}>
          <Route path='/' Component={Inicio} />
          <Route path='/biografia' Component={Biografia} />
          <Route path='/musica' Component={Musica} />
          <Route path='/videoclips' Component={Videoclips} />
          <Route path='/produccion' Component={Produccion} />
          <Route path='/contacto' Component={Contacto} />
        </Router>
      </Suspense>
      {/* <div className='main'>
        <Inicio inicioIsVisible={inicioIsVisible} />
        <Biografia biografiaIsVisible={biografiaIsVisible} />
        <Videoclips videoIsVisible={videoIsVisible} />
        <Musica musicaIsVisible={musicaIsVisible} />
        <Produccion prodIsVisible={prodIsVisible} />
        <Contacto contactoIsVisible={contactoIsVisible} />
      </div> */}
      <Footer />
    </>
  )
}
