import { PropTypes } from 'react';
import { A, H2, H3 } from '../../base/components';
import { getPledgerImage } from '../../pledgers/images/store';
import styles from './list.styl';

const getImageStyle = (pledger) => ({
  backgroundImage: `url(${getPledgerImage(pledger.id)})`,
});

const PledgeListItem = ({ pledge, pledger }) => (
  <div className={styles.pledgeList} key={pledger.id}>
    <div className={styles.userImageContainer}>
      <div className={styles.userImage} style={getImageStyle(pledger)} />
    </div>
    <div className={styles.pledgeContainer}>
      <H2 type='secondary'>{pledger.fullName}&rsquo;s Impact Pledge</H2>
      <div className={styles.pledge}>
        <div className={styles.pledgeItem}>
          <H3 className={styles.pledgeItemHeading}>Impact</H3>
          <H3 type='secondary' className={styles.pledgeItemContent}>
            {pledge.impact}
          </H3>
        </div>
        <div className={styles.pledgeItem}>
          <H3 className={styles.pledgeItemHeading}>How often?</H3>
          <H3 type='secondary' className={styles.pledgeItemContent}>
            every {pledge.howOften}
          </H3>
        </div>
      </div>
      <div>
        <A href={`/pledgers/${pledger.id}`}>
          Read more about how {pledger.firstName} is fulfilling the pledge
        </A>
      </div>
    </div>
  </div>
);

PledgeListItem.propTypes = {
  pledge: PropTypes.object.isRequired,
  pledger: PropTypes.object.isRequired,
};

const PledgeList = ({ pledges }) => (
  <div>
    {pledges.map(({ pledger, pledge }) => (
      <PledgeListItem pledger={pledger} pledge={pledge} key={pledger.id} />
    ))}
  </div>
);

PledgeList.propTypes = {
  pledges: PropTypes.array.isRequired,
};

export default PledgeList;
