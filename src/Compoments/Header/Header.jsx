
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
               <nav>
                <span>My Websites</span>
                <Link to="/">Home</Link>
                <NavLink to="/users">Users</NavLink>
               
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">contact us</Link>
               
            </nav>
        </div>
    );
};

export default Header;