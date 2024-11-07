import './Contacto.css'

export function Contacto ({ contactoIsVisible }) {
  return (
    <div className='contacto-container'>
      {contactoIsVisible && (
        <div className='contacto-main'>
          <h1>CONTACTO</h1>
          <div className='contacto-content'>
            <div>
              <h3>Label</h3>
              <ul>
                <li>Dangerous Latin Music</li>
                <li><a href='https://www.facebook.com/DangerousLatinMusic/'>www.facebook.com/DangerousLatinMusic</a></li>
                <li>+57 3002460946</li>
              </ul>
              <h3>Management</h3>
              <ul>
                <li>Wilmer Clavijo</li>
                <li><a href='https://www.facebook.com/profile.php?id=100018098983738'>www.facebook.com/profile</a></li>
                <li>kumathedangerous@gmail.com</li>
              </ul>
              <h3>Booking</h3>
              <ul>
                <li>Wilmer Clavijo</li>
                <li><a href='https://www.facebook.com/profile.php?id=100018098983738'>www.facebook.com/profile</a></li>
                <li>kumathedangerous@gmail.com</li>
              </ul>
            </div>
            <div>
              <h3>Management & Booking</h3>
              <ul>
                <li>kumathedangerous@gmail.com</li>
                <li>+57 3132594683</li>
                <li><a href='https://www.facebook.com/kumadangerous'>www.facebook.com/kumadangerous</a></li>
                <li><a href='https://www.youtube.com/@KumaTheDangerous'>www.youtube.com/@KumaTheDangerous</a></li>
              </ul>
              <h3>La versatilidad no se compra©</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
