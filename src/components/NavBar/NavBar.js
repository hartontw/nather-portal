import './NavBar.css';
import about from '../../images/about.png';
import projects from '../../images/projects.png';
import articles from '../../images/articles.png';
import videos from '../../images/videos.png';
import NavItem from './NavItem/NavItem';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavItem to="/" img={about} text="About" />
                </li>
                <li>
                    <NavItem to="/projects" img={projects} text="Projects" />
                </li>
                <li>
                    <NavItem to="/articles" img={articles} text="Articles" />
                </li>      
                <li>
                    <NavItem to="/videos" img={videos} text="Videos" />
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;