import './Footer.css'
import youtubeIcon from '../img/icons/youtube.png'
import facebookIcon from '../img/icons/facebook.png'
import instagramIcon from '../img/icons/instagram.png'
import firma from '../img/firma.png'

export function Footer () {
  return (
    <footer className='text-center'>
      <div className='footer-main'>
        <div className='icons'>
          <a
            href='https://www.facebook.com/kumadangerous'
            target='__blanket'
          >
            <div>
              <img src={facebookIcon} alt='Facebook' />
            </div>
          </a>
          <a
            href='https://www.instagram.com/kumathedangerous/'
            target='__blanket'
          >
            <div>
              <img src={instagramIcon} alt='Instagram' />
            </div>
          </a>
          <a
            href='https://www.youtube.com/channel/UCRAOeLMO3SccmLx-eIZYLEA?view_as=subscriber'
            target='__blanket'
          >
            <div>
              <img src={youtubeIcon} alt='Youtube' />
            </div>
          </a>
        </div>
        <p>Official Website</p>
      </div>
      <div className='firma-img'>
        <img
          src={firma}
          alt='Firma'
        />
      </div>
    </footer>
  )
}
