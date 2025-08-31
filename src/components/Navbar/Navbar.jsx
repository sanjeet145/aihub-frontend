import { Link } from 'react-router-dom'
import './navbar.css';
import { useAuth, useIsAuthenticated } from '../../context/AuthContext';

export default function Navbar() {
  const isAuthenticated = useIsAuthenticated();
  const {logout} = useAuth();
  return (
    <div className='navbar'>
      <div className='logo'></div>
      <div className='nav-btns'>
        <Link className='nav-btn' to={'/'}>Home</Link>
        <Link className='nav-btn' to={'/profile'}>Profile</Link>
        <Link className='nav-btn' to={'/hub'}>Explore Hub</Link>
        {isAuthenticated ? <>
          <Link className='nav-btn' to={'/'} onClick={logout}>Logout</Link>
        </> : <>
          <Link className='nav-btn' to={'/login'}>Login</Link>
          <Link className='nav-btn' to={'/register'}>Register</Link>
        </>}

      </div>
    </div>
  )
}
