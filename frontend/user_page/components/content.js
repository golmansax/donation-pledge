import { Container } from '../../base/components';
import { Pledge } from '../../pledge/components';
import styles from './content.styl';

const UserPageContent = () => (
  <div>
    <div className={styles.navbar}>
      <Container>
        My Impact Pledge
      </Container>
    </div>
    <div className={styles.section}>
      <Container>
        <Pledge />
      </Container>
    </div>
  </div>
);

export default UserPageContent;
