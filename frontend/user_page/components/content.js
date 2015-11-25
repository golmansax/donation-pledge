import { Container, H1 } from '../../base/components';
import { Pledge } from '../../pledge/components';
import styles from './content.styl';

const UserPageContent = () => (
  <div className={styles.section}>
    <Container>
      <H1 type='secondary' className={styles.sectionHeading}>
        See what others are pledging
      </H1>
      <Pledge />
    </Container>
  </div>
);

export default UserPageContent;
