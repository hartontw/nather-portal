import './Footer.css';
import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';
import youtube from '../../images/youtube.png';

function Footer() {
    return (
        <footer>
            <p className='copy'>Naher {new Date().getFullYear()}</p>
            <div className="social">
                <img className='social-btn' src={youtube} alt="YouTube" />
                <img className='social-btn' src={twitter} alt="Twitter" />
                <img className='social-btn' src={linkedin} alt="LinkedIn" />
            </div>            
            <p className='developed'>Developed by <a href="https://harton.info" target="_blank">Harton</a></p>
        </footer>
    );
}

export default Footer;