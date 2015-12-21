import { PropTypes } from 'react';
import SignedText from './signed_text';
import { H2, P } from '../../base/components';
import { DonationList } from '../../donation/components';
import styles from './pledge.styl';

const Pledge = ({ pledge, pledger }) => (
  <div className={styles.rootElement}>
    <div className={styles.pledge}>
      I pledge to
      <SignedText category='impact'>{pledge.impact}</SignedText>
      every
      <SignedText category='how often?'>{pledge.howOften}</SignedText>
    </div>
    <div className={styles.container}>
      <div className={styles.userImageContainer}>
        <div className={styles.userImage} />
        <SignedText category='you'>{pledger.fullName}</SignedText>
      </div>
      <div className={styles.otherContainer}>
        <div className={styles.section}>
          <H2>Mission</H2>
          <P type='secondary'>{pledge.mission}</P>
        </div>

        <H2>My Actions</H2>
        <DonationList donations={pledge.donations} />
      </div>
    </div>
  </div>
);

Pledge.propTypes = {
  pledger: PropTypes.object.isRequired,
  pledge: PropTypes.object.isRequired,
};

export default Pledge;
