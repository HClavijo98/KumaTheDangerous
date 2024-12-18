import './Videoclips.css'

export function Videoclips ({ videoIsVisible }) {
  const videos = [
    {
      title: 'Llamas',
      url: 'https://www.youtube.com/embed/ugUMNQjL9u8?vq=hd1080'
    },
    {
      title: '24 de Agosto',
      url: 'https://www.youtube.com/embed/oJ78K63AJnc?vq=hd1080'
    },
    {
      title: 'LOVA',
      url: 'https://www.youtube.com/embed/jvjonAcMJZk?vq=hd1080'
    },
    {
      title: 'Rolo mi perro',
      url: 'https://www.youtube.com/embed/6-bI7_9_9ME?vq=hd1080'
    },
    {
      title: '11:11',
      url: 'https://www.youtube.com/embed/NalS00tqxeQ?vq=hd1080'
    },
    {
      title: 'Feliz año nuevo',
      url: 'https://www.youtube.com/embed/8g2F14Fq3zg?vq=hd1080'
    }
  ]
  return (
    <div>
      {videoIsVisible && (
        <div className='video-container'>
          <h1>VIDEOCLIPS</h1>
          <div className='video-main'>
            {videos.map((video, index) => (
              <iframe
                key={index}
                src={video.url}
                title={video.title}
                alt={video.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
