import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          {user ? (
            <>
              <li>
                <NavLink to="/Orders/new">Add Order</NavLink>
              </li>
              <p>Hello {user.username}</p>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
