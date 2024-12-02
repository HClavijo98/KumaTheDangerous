import './Inicio.css'
import { Carousel } from './Carousel.jsx'
import kuma from '../img/kumaPortada.png'
// import foto1 from '../img/kuma1.JPG'
import foto2 from '../img/kuma2.jpg'
import foto3 from '../img/kuma3.jpg'
import foto4 from '../img/kuma4.jpg'
import foto5 from '../img/kuma5.jpg'
import foto6 from '../img/kuma6.jpg'
import foto7 from '../img/kuma7.jpg'
import foto8 from '../img/kuma8.jpg'

export default function Inicio ({ inicioIsVisible }) {
  const images = [
    // foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8
  ]

  return (
    <div>
      <div className='inicio-container show'>
        <div className='inicio-main'>
          <div className='nombre'>
            <img
              src='https://static.wixstatic.com/media/f1d3a9_ee87ce02d3254b37af56e0d922790c03~mv2_d_6000_4000_s_4_2.png/v1/crop/x_390,y_1350,w_2370,h_930/fill/w_556,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/TITULO.png'
              alt='Kuma The Dangerous'
            />
            <h1>Official Website</h1>
          </div>
          <img
            className='retrato'
            src={kuma}
            alt='Retrato Kuma'
          />
        </div>
        <div>
          <Carousel images={images} />
        </div>
      </div>
    </div>
  )
}
