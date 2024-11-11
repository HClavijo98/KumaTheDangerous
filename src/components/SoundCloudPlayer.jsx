import React from 'react'

export function SoundCloudPlayer ({ trackUrl, onEnded }) {
  return (
    <div className='soundcloud-player'>
      <iframe
        width='100%'
        height='166'
        scrolling='no'
        frameBorder='no'
        allow='autoplay'
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
        onEnded={onEnded}
      />
    </div>
  )
}
