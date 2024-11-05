import './Footer.css'
import youtubeIcon from '../img/icons/youtube.png'
import facebookIcon from '../img/icons/facebook.png'
import instagramIcon from '../img/icons/instagram.png'

export function Footer () {
  return (
    <footer className='text-center'>
      <div className='container'>
        <div className='icons'>
          <a href='https://www.facebook.com/kumadangerous'>
            <img src={facebookIcon} alt='Facebook' />
          </a>
          <a href='https://www.instagram.com/kumathedangerous/'>
            <img src={instagramIcon} alt='Instagram' />
          </a>
          <a href='https://www.youtube.com/channel/UCRAOeLMO3SccmLx-eIZYLEA?view_as=subscriber'>
            <img src={youtubeIcon} alt='Youtube' />
          </a>
        </div>
        <p>Official Website</p>
      </div>
      <img
        className='d-none d-md-block firma-img'
        src='https://static.wixstatic.com/media/f1d3a9_c90b6d8d79434a52b88a2b3d99e68dd2~mv2_d_2094_3100_s_2.png/v1/crop/x_0,y_1145,w_2094,h_569/fill/w_477,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/firma.png'
        alt='Firma'
      />
    </footer>
  )
}
