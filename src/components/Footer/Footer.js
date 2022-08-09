import './Footer.css';
import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';
import youtube from '../../images/youtube.png';

function Footer() {
    return (
        <footer>
            <p className='copy'>Naher {new Date().getFullYear()}</p>
            <div className="social">
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img className='social-btn' src={youtube} alt="YouTube" /></a>
                <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><img className='social-btn' src={twitter} alt="Twitter" /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><img className='social-btn' src={linkedin} alt="LinkedIn" /></a>
            </div>            
            <p className='developed'>Developed by <a href="https://harton.info" target="_blank" rel="noreferrer">Harton</a></p>
        </footer>
    );
}

export default Footer;