import './Biografia.css'
import { useAnimation } from '../hooks/useAnimation'
import bio1 from '../img/bio1.jpg'
import bio2 from '../img/bio2.jpg'
import bio3 from '../img/bio3.JPG'

export function Biografia ({ biografiaIsVisible }) {
  const { isAnimating } = useAnimation(biografiaIsVisible)

  return (
    <div className='bio-container'>
      {biografiaIsVisible && (
        <div className={`bio-main ${isAnimating ? 'show' : ''}`}>
          <div className='bio-header'>
            <h1>BIOGRAFÍA</h1>
            <div>
              <ul>
                <li><strong>Origen: </strong>Bogota, Colombia</li>
                <li><strong>Genero Musical: </strong>Musica urbana</li>
              </ul>
              <ul>
                <li><strong>Carrera Musical: </strong>2009 - Actualidad</li>
                <li><strong>Sello Musical: </strong>Dangerous Latin Music</li>
              </ul>
            </div>
          </div>
          <div className='bio-main-D'>
            <img src={bio1} />
            <p>
              Kuma the Dangerous es un artista y productor con más de 15 años en la música urbana,
              representando a la Sabana de Occidente con un estilo auténtico y una visión clara.
              Su música, que fusiona reggaetón y dancehall, refleja historias y emociones que conectan
              de manera genuina con quienes buscan algo real en el género urbano.
            </p>
          </div>
          <div className='bio-main-I'>
            <img src={bio2} />
            <p>Con su sello independiente, Dangerous Latin Music, Kuma ha creado un espacio que no
              solo impulsa su propio talento, sino también el de otros artistas locales que enfrentan
              desafíos similares. '24', su nuevo álbum, captura su viaje y evolución como artista,
              mostrando su experiencia tanto en la música comercial como en los ritmos de la calle.
            </p>
          </div>
          <div className='bio-main-D'>
            <img src={bio3} />
            <p>Cada proyecto y cada canción de Kuma the Dangerous son una muestra de su compromiso por
              elevar la música urbana, y su historia inspira a quienes también sueñan con dejar su huella.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
