import './Article.css';
import thumbnail from '../../../../images/avatar.png';

function Article() {
  return (
    <div className="article">
      <div className="background"></div>
      <div className="front">        
        <h1 className="title">Nombre</h1>
        <p className='article-date'>1 January 2022</p>
        <hr className='line' />
        <div className="body">
          <img src={thumbnail} alt="" className="thumbnail" />
          <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, ipsa! Voluptates quia sed dolores quidem quaerat tenetur officia, autem magnam quos magni, neque necessitatibus at? Deleniti ex autem delectus quos?</p>
        </div>        
      </div>
    </div>
  )
}

export default Article;