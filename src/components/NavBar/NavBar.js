import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarContent}>
          <Link to="/" className={styles.icon} aria-label="Home">
            <span className="fa fa-tasks" aria-hidden="true" />
          </Link>
          <ul className={styles.links}>
            <li>
              <NavLink
                className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/favorite"
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;