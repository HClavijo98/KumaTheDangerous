import './Musica.css'
import { useState } from 'react'
import { useAnimation } from '../hooks/useAnimation.js'
import { SoundPlayer } from './SoundPlayer.jsx'
import NextAlbum from '../img/24_FRONT.png'
import lirik from '../img/liri-k ilegal.jpg'

export function Musica ({ musicaIsVisible }) {
  const { isAnimating } = useAnimation(musicaIsVisible)
  const [visiblePlayer, setVisiblePlayer] = useState(1)
  const songs = [
    { title: 'Kuma The Dangerous - 24 de Agosto', url: 'public/tracks/24 de agosto.mp3', tags: ['trap'] },
    { title: 'Kuma The Dangerous - ROLO MI PERRO', url: 'public/tracks/ROLO MI PERRO.mp3', tags: ['reggaeton'] }
  ]
  const songs2 = [
    { title: 'Kuma The Dangerous - Llamas', url: 'public/tracks/Llamas.mp3', tags: ['rap'] },
    { title: 'Kuma The Dangerous - Que Hablen', url: 'public/tracks/Que Hablen.mp3', tags: ['rap'] }
  ]

  const handleImageClick = (playerId) => {
    setVisiblePlayer(playerId === visiblePlayer ? null : playerId) // Alterna entre mostrar y ocultar el reproductor
  }

  return (
    <div className='musica-container'>
      {musicaIsVisible && (
        <div className={`musica-main ${isAnimating ? 'show' : ''}`}>
          <h1>MÚSICA</h1>
          <div className='musica-content'>
            <div className='next-album'>
              <h2>¡ PROXIMO ALBUM !</h2>
              <img src={NextAlbum} alt='Proximo album' />
            </div>
            <div className='player'>
              <h2>ALBUMS</h2>
              <div className='album'>
                <div className='album-img'>
                  <img
                    src={NextAlbum}
                    alt='Proximo album'
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleImageClick(1)}
                  />
                  <img
                    src={lirik}
                    alt='Proximo album'
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleImageClick(2)}
                  />
                  <img
                    src={NextAlbum}
                    alt='Proximo album'
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleImageClick(1)}
                  />
                </div>
                <div className='album-players'>
                  {visiblePlayer === 1 &&
                    <div>
                      <img src={NextAlbum} alt='Proximo Album' />
                      <SoundPlayer songs={songs} className='player' />
                    </div>}
                  {visiblePlayer === 2 &&
                    <div>
                      <img src={lirik} alt='Proximo Album' />
                      <SoundPlayer songs={songs2} className='player' />
                    </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
