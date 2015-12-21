import { PropTypes } from 'react';
import { Container, H1 } from '../../base/components';
import { BrandNavbar } from '../../brand/components';
import { Pledge } from '../../pledge/components';
import styles from './content.styl';

const UserPageContent = ({ pledger }) => (
  <div>
    <BrandNavbar />
    <Container>
      <H1 type='secondary' className={styles.heading}>
        {pledger.fullName}&rsquo;s Impact Pledge
      </H1>
    </Container>
    <div className={styles.section}>
      <Container>
        <Pledge pledger={pledger} pledge={pledger.pledges[0]} />
      </Container>
    </div>
  </div>
);

UserPageContent.propTypes = {
  pledger: PropTypes.object.isRequired,
};

export default UserPageContent;
