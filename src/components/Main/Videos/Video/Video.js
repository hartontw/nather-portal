import './Video.css';
import tv from '../../../../images/tv.png';
import scanlines from '../../../../images/scanlines.png';

function Video({code}) {
    return (
        <div className="video">
            <iframe className='player' src={`https://www.youtube.com/embed/${code}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowfullscreen>
            </iframe>
            <img className='scanlines' src={scanlines} alt="" />
            <div className="reflections"></div>            
            <img src={tv} alt="TV" className="tv" />     
        </div>
    )
}

export default Video;