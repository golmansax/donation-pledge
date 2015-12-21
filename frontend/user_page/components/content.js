import { Container, H1 } from '../../base/components';
import { BrandNavbar } from '../../brand/components';
import { Pledge } from '../../pledge/components';
import styles from './content.styl';

const UserPageContent = () => (
  <div>
    <BrandNavbar />
    <Container>
      <H1 type='secondary' className={styles.heading}>
        Holman Gao&rsquo;s Impact Pledge
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
