import Player from '@madzadev/audio-player'
import '@madzadev/audio-player/dist/index.css'
import { React } from 'react'

export function SoundPlayer ({ songs }) {
  const colors = {
    tagsBackground: '#960000',
    tagsText: '#ffffff',
    tagsBackgroundHoverActive: '#6e65f1',
    tagsTextHoverActive: '#ffffff',
    searchBackground: '#18191f',
    searchText: '#ffffff',
    searchPlaceHolder: '#575a77',
    playerBackground: '#18191f',
    titleColor: '#ffffff',
    timeColor: '#ffffff',
    progressSlider: '#960000',
    progressUsed: '#ffffff',
    progressLeft: '#151616',
    bufferLoaded: '#1f212b',
    volumeSlider: '#960000',
    volumeUsed: '#ffffff',
    volumeLeft: '#151616',
    playlistBackground: '#18191f',
    playlistText: '#575a77',
    playlistBackgroundHoverActive: '#18191f',
    playlistTextHoverActive: '#960000'
  }

  return (
    <div className='sound-player'>
      <Player
        trackList={songs}
        customColorScheme={colors}
      />
    </div>
  )
}
