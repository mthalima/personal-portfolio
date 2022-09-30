import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setToggleMenu(false);
    }, [location]);

  return (
    <div className='navbar' id={toggleMenu ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={() => {setToggleMenu((prev) => !prev)}}>
                <MenuIcon />
            </button>
        </div>
        <div className='links'>
            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/experience'> Experience </Link>
        </div>
    </div>
  )
}

export default Navbar
