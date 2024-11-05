import './Videoclips.css'

export function Videoclips ({ videoIsVisible }) {
  return (
    <div>
      {videoIsVisible && (
        <div className='video-container'>
          <h1>VIDEOCLIPS</h1>
          <div>
            <iframe
              src='https://www.youtube.com/embed/ugUMNQjL9u8?vq=hd1080'
              title='Llamas'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
            <iframe
              src='https://www.youtube.com/embed/oJ78K63AJnc?vq=hd1080'
              title='24 de Agosto'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
            <iframe
              src='https://www.youtube.com/embed/jvjonAcMJZk?vq=hd1080'
              title='LOVA'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
            <iframe
              src='https://www.youtube.com/embed/6-bI7_9_9ME?vq=hd1080'
              title='Rolo mi perro'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
            <iframe
              src='https://www.youtube.com/embed/NalS00tqxeQ?vq=hd1080'
              title='11:11'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
            <iframe
              src='https://www.youtube.com/embed/8g2F14Fq3zg?vq=hd1080'
              title='Feliz Año Nuevo'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}
