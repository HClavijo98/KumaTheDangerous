import './Biografia.css'
import { useAnimation } from '../hooks/useAnimation'

export function Biografia ({ biografiaIsVisible }) {
  const { isAnimating } = useAnimation(biografiaIsVisible)

  return (
    <div className='bio-container'>
      {biografiaIsVisible && (
        <div className={`bio-main ${isAnimating ? 'show' : ''}`}>
          <header className='bio-header'>
            <h2>BIOGRAFIA</h2>
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
          </header>
          <div className='bio-main-D'>
            <p>
              Wilmer Stik Clavijo Reina nacido en Bogotá, Colombia en 1994, nacionalizado español,
              tras haber vivido su niñez en Barcelona desde sus seis años de edad hasta llegar a su adolescencia.
              Se da a  Conocer artísticamente como (Principe Latino) en el año 2009 en el gremio del Hip Hop Colombiano.
            </p>
            <img src='../src/img/barcelona.jpg' alt='Barcelona' />
          </div>
          <div className='bio-main-I'>
            <img src='../src/img/liri-k ilegal.jpg' alt='Liri-k ilegal' />
            <p>Fundador de la agrupación de hip hop/reggae (Liri-k ilegal) trabajando en ella desde el año 2010
              hasta finales del año 2016, realizando 2 mixtape’s musicales y haciendo parte de bastantes
              presentaciones y eventos dentro y fuera de la capital colombiana. iniciando el año 2017 decide
              tomar un rumbo diferente en la música inclinándose por ritmos mas comerciales, cambiando desde su
              nombre y su imagen artística.
            </p>
          </div>
          <div className='bio-main-D'>
            <p>El significado del actual nombre es inspirado en la estrella de la constelación del dragón llamada
              “Kuma”. En el mes de febrero se forman lazos con el estudio musical urbano  (Lite Music) producido
              y mezclado por (Diego Rozo) mas conocido en el gremio de la música urbana como (Fast N Beat),
              iniciando en el mes de abril la grabación del álbum llamado (Dangerous). En el mes de octubre Kuma
              crea junto con Anderson Ramírez mas conocido en la música urbana como (Motaun) la fundación
              (Fundación inventiva medios) dirigida a población vulnerable enfocado  en jóvenes y adolescentes
              en el sector artístico y cultural, apropiándose de transportes públicos (transmilenios & buses)
              buscando jóvenes artistas que luchen por sus sueños y quieran hacer de su arte su proyecto de vida.
            </p>
            <img src='../src/img/dangerous.jpg' alt='Dangerous' />
          </div>
          <div className='bio-main-I'>
            <img src='../src/img/yo_te_dije.jpg' alt='Yo te dije' />
            <p>
              En el año 2018 trabaja dos audiovisuales del album “ Dangerous ” que lo hacen dar a conocer a nivel
              sabana occidente como uno de los  artistas urbanos mas influyentes de la zona. En el año 2019 trabaja
              una colaboración llamada (YO TE DIJE), con un colega de la zona conocido como “ Real Oponente ”  trabajada
              Audiovisualmente por Doble L Films y producida musicalmente por Orion Hits, la cual tuvo una gira de
              medio a nivel sabana occidente y que actualmente sigue cogiendo fuerza. Se inician alianzas con el
              grupo de motos “ STREET BROTHERS ” siendo parte de uno de los Integrantes del duo MENTES MUSICALES,
              junto a SEGA MUSIC. y trabajando próximos proyectos que saldrán al transcurso de este año 2019.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
