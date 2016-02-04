import { PropTypes } from 'react';
import SignedText from './signed_text';
import { H2, P } from '../../base/components';
import { DonationList } from '../../donation/components';
import { getPledgerImage } from '../../pledgers/images/store';
import styles from './pledge.styl';

const getImageStyle = (pledger) => ({
  backgroundImage: `url(${getPledgerImage(pledger.id)})`,
});

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
        <div className={styles.userImage} style={getImageStyle(pledger)} />
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
  pledge: PropTypes.object.isRequired,
  pledger: PropTypes.object.isRequired,
};

export default Pledge;
