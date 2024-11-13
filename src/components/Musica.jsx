import './Musica.css'
import { useState } from 'react'
import { useAnimation } from '../hooks/useAnimation.js'
import { SoundPlayer } from './SoundPlayer.jsx'
import NextAlbum from '../img/24_FRONT.png'
import lirik from '../img/liri-k ilegal.jpg'

export function Musica ({ musicaIsVisible }) {
  const { isAnimating } = useAnimation(musicaIsVisible)
  const [visiblePlayer, setVisiblePlayer] = useState(null)
  const songs = [
    { title: 'Kuma The Dangerous - 24 de Agosto', url: './src/tracks/24 de agosto.mp3', tags: ['house'] },
    { title: 'Kuma The Dangerous - ROLO MI PERRO', url: './src/tracks/ROLO MI PERRO.mp3', tags: ['house'] }
  ]
  const songs2 = [
    { title: 'Kuma The Dangerous - Llamas', url: './src/tracks/Llamas.mp3', tags: ['house'] },
    { title: 'Kuma The Dangerous - Que Hablen', url: './src/tracks/Que Hablen.mp3', tags: ['house'] }
  ]

  const handleImageClick = (playerId) => {
    setVisiblePlayer(playerId === visiblePlayer ? null : playerId) // Alterna entre mostrar y ocultar el reproductor
  }

  return (
    <div className='musica-container'>
      {musicaIsVisible && (
        <div className={`musica-main ${isAnimating ? 'show' : ''}`}>
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
                  </div>
                  <div className='album-players'>
                    {visiblePlayer === 1 &&
                      <div>
                        <h3>Songs</h3>
                        <SoundPlayer songs={songs} />
                      </div>}
                    {visiblePlayer === 2 &&
                      <div>
                        <h3>Songs2</h3>
                        <SoundPlayer songs={songs2} />
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
