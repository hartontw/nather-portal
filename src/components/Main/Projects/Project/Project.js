import './Project.css';

function Project({title, image, children}) {
    return (
        <div className="project">
            <h2 className="project-title">{title}</h2>
            <div className="project-content">
                <img src={image} alt={title} />
                <p>{children}</p>
            </div>
        </div>
    )
}

export default Project;