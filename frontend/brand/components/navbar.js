import { Container, A } from '../../base/components';
import BrandLogo from './logo';
import styles from './navbar.styl';

const BrandNavbar = () => (
  <div className={styles.navbar}>
    <Container>
      <BrandLogo className={styles.navbarLogo} />
      <A className={styles.navbarLink} design='inherit' href='/log-in'>
        Log In
      </A>
    </Container>
  </div>
);

export default BrandNavbar;
