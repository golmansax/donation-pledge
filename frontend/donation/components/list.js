import { PropTypes } from 'react';
import { A, P } from '../../base/components';
import styles from './list.styl';

const renderDonation = (donation, index) => (
  <div className={styles.listItem} key={index}>
    <div className={styles.year}>{donation.year}</div>
    <div className={styles.content}>
      <div className={styles.heading}>
        <span className={styles.action}>Donated</span>
        &nbsp;to&nbsp;
        <A href={donation.organization.url}>{donation.organization.text}</A>
      </div>
      <P type='secondary'>{donation.reason}</P>
    </div>
  </div>
);

const DonationList = ({ donations }) => (
  <div>{donations.map(renderDonation)}</div>
);

DonationList.propTypes = {
  donations: PropTypes.array.isRequired,
};

export default DonationList;
