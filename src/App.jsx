import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Header } from './components/Header.jsx'
import { Inicio } from './components/Inicio.jsx'
import { Footer } from './components/Footer.jsx'

export function App () {
  return (
    <>
      <Header />
      <div className='main'>
        <Inicio />
      </div>
      <Footer />
    </>
  )
}
