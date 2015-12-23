import { PropTypes } from 'react';
import { A, H2, H3 } from '../../base/components';
import { getPledgerImage } from '../../pledgers/images/store';
import Pledge from './pledge';
import SignedText from './signed_text';
import styles from './list.styl';

const getImageStyle = (pledger) => {
  return {
    backgroundImage: `url(${getPledgerImage(pledger.id)})`,
  };
};

const renderPledge = ({ pledge, pledger }) => (
  <div className={styles.pledgeList}>
    <div className={styles.userImageContainer}>
      <div className={styles.userImage} style={getImageStyle(pledger)} />
    </div>
    <div className={styles.pledgeContainer}>
      <H2 type='secondary'>{pledger.fullName}</H2>
      <div className={styles.pledge}>
        <div className={styles.pledgeItem}>
          <H3>Impact</H3>
          <H3 type='secondary'>{pledge.impact}</H3>
        </div>
        <div className={styles.pledgeItem}>
          <H3>How often?</H3>
          <H3 type='secondary'>every {pledge.howOften}</H3>
        </div>
      </div>
      <div>
        <A href={`/pledgers/${pledger.id}`}>
          Read more about {pledger.firstName}&rsquo;s pledge
        </A>
      </div>
    </div>
  </div>
);

const PledgeList = ({ pledges }) => <div>{pledges.map(renderPledge)}</div>;

PledgeList.propTypes = {
  pledges: PropTypes.array.isRequired,
};

export default PledgeList;
