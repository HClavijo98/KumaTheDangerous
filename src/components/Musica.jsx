import './Musica.css'
import { SoundPlayer } from './SoundPlayer.jsx'
import NextAlbum from '../img/24_FRONT.png'

export function Musica ({ musicaIsVisible }) {
  const songs = [
    { title: 'Kuma The Dangerous - 24 de Agosto', url: './src/tracks/24 de agosto.mp3', tags: ['house'] },
    { title: 'Kuma The Dangerous - ROLO MI PERRO', url: './src/tracks/ROLO MI PERRO.mp3', tags: ['house'] }
  ]
  const songs2 = [
    { title: 'Kuma The Dangerous - ROLO MI PERRO', url: './src/tracks/ROLO MI PERRO.mp3', tags: ['house'] },
    { title: 'Kuma The Dangerous - 24 de Agosto', url: './src/tracks/24 de agosto.mp3', tags: ['house'] }
  ]

  return (
    <div className='musica-container'>
      {musicaIsVisible && (
        <div className='musica-main'>
          <h1>Musica</h1>
          <div className='musica-content'>
            <div className='next-album'>
              <h2>¡ PROXIMO ALBUM !</h2>
              <img src={NextAlbum} alt='Proximo album' />
            </div>
            <div className='player'>
              <SoundPlayer songs={songs} />
              <div>
                <h2>ALBUMS</h2>
                <div className='album'>
                  <img
                    src={NextAlbum}
                    alt='Proximo album'
                    style={{ cursor: 'pointer' }} // Opcional: cambia el cursor para indicar que se puede hacer clic
                  />
                  <SoundPlayer songs={songs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
