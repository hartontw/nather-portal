import './NavItem.css'
import { NavLink, useLocation } from 'react-router-dom';

function NavItem({to, img, text}) {    
    const location = useLocation();

    return(
        <div className='nav-item'>
            <NavLink className='nav-link' to={to}>
                <img src={img} alt={text} />            
                {
                    to === location.pathname
                    ? <p className='selected'>{text}</p>
                    : <p>{text}</p>
                }
            </NavLink>
        </div>
    )
}

export default NavItem;