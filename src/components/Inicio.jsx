import './Inicio.css'
import { useAnimation } from '../hooks/useAnimation'
import { Carousel } from './Carousel.jsx'
import kumaPortada from '../assets/kumaPortada.png'
// import foto1 from '../assets/kuma1.JPG'
import foto2 from '../assets/kuma2.jpg'
import foto3 from '../assets/kuma3.jpg'
import foto4 from '../assets/kuma4.jpg'
import foto5 from '../assets/kuma5.jpg'
import foto6 from '../assets/kuma6.jpg'
import foto7 from '../assets/kuma7.jpg'
import foto8 from '../assets/kuma8.jpg'

export function Inicio ({ inicioIsVisible }) {
  const { isAnimating } = useAnimation(inicioIsVisible)
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
      <div className={`inicio-container ${isAnimating ? 'show' : ''}`}>
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
            src={kumaPortada}
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
