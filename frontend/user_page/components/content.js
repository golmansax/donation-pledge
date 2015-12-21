import { Container, H1 } from '../../base/components';
import { Pledge } from '../../pledge/components';
import styles from './content.styl';

const UserPageContent = () => (
  <div>
    <div className={styles.navbar}>
      <Container>
        My Impact Pledge
      </Container>
    </div>
    <Container>
      <H1 type='secondary' className={styles.heading}>
        Holman&rsquo;s Impact Pledge
      </H1>
    </Container>
    <div className={styles.section}>
      <Container>
        <Pledge />
      </Container>
    </div>
  </div>
);

export default UserPageContent;
