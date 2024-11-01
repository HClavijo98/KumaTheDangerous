import './Inicio.css'
import { useAnimation } from '../hooks/useAnimation'

export function Inicio ({ inicioIsVisible }) {
  const { isAnimating } = useAnimation(inicioIsVisible)

  return (
    <div>
      {inicioIsVisible && (
        <div className={`inicio-container ${isAnimating ? 'show' : ''}`}>
          <div className='nombre'>
            <img
              src='https://static.wixstatic.com/media/f1d3a9_ee87ce02d3254b37af56e0d922790c03~mv2_d_6000_4000_s_4_2.png/v1/crop/x_390,y_1350,w_2370,h_930/fill/w_556,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/TITULO.png'
              alt='Kuma The Dangerous'
            />
            <strong>Official Website</strong>
          </div>
          <img
            className='retrato d-none d-md-block'
            src='https://static.wixstatic.com/media/f1d3a9_371ace91a912458da095833fd5291dfb~mv2_d_6000_4000_s_4_2.png/v1/crop/x_1741,y_0,w_3355,h_4000/fill/w_498,h_593,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/KUMA.png'
            alt='Retrato Kuma'
          />
        </div>
      )}
    </div>
  )
}
