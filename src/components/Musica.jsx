import './Musica.css'
import { SoundCloudPlayer } from './SoundCloudPlayer.jsx'
import { useState, useEffect } from 'react'

export function Musica ({ musicaIsVisible }) {
  const songs = [
    { title: '10 Years of Deep Dark', url: 'deepdarkdangerous/paige-julia-seeing-double' },
    { title: 'The Awakening of Sibu', url: 'deepdarkdangerous/drumterror-sea-wolf' }
  ]

  const [currentSongIndex, setCurrentSongIndex] = useState(0)

  // Función que se ejecuta al terminar la canción
  const handleSongEnd = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length) // Cambia la canción automáticamente
    console.log('cambio!')
  }

  // Asegúrate de que el reproductor está en la canción correcta
  const currentSong = songs[currentSongIndex]

  return (
    <div className='musica-container'>
      {musicaIsVisible && (
        <div className='musica-main'>
          <h1>Musica</h1>
          <div className='musica-content'>
            {/* Reproductor de música */}
            <SoundCloudPlayer
              trackUrl={`https://soundcloud.com/${currentSong.url}`}
              onEnded={handleSongEnd} // Cambia la canción cuando la actual termine
            />
            {/* Lista de canciones */}
            <div className='song-list'>
              <h2>Playlist</h2>
              <ul>
                {songs.map((song, index) => (
                  <li
                    key={index}
                    onClick={() => setCurrentSongIndex(index)} // Permite que el usuario haga click para cambiar de canción
                    style={{
                      fontWeight: currentSongIndex === index ? 'bold' : 'normal',
                      color: currentSongIndex === index ? 'red' : 'white',
                      cursor: 'pointer'
                    }}
                  >
                    {song.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
