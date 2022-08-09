import './Article.css';
import thumbnail from '../../../../images/avatar.png';

function Article({title, date, children}) {
  return (
    <div className="article">
      <div className="background"></div>
      <div className="front">        
        <h1 className="title">{title}</h1>
        <p className='article-date'>{date}</p>
        <hr className='line' />
        <div className="body">
          <img src={thumbnail} alt="" className="thumbnail" />
          <p className='text'>{children}</p>
        </div>        
      </div>
    </div>
  )
}

export default Article;