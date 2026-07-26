import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarContent}>
          <a href="/" className={styles.icon} aria-label="Home">
            <span className="fa fa-tasks" aria-hidden="true" />
          </a>
          <ul className={styles.links}>
            <li><a href="/">Home</a></li>
            <li><a href="/favorite">Favorite</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
