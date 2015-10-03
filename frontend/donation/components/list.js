import React from 'react';
import styles from './list.styl';

export default class DonationList extends React.Component {
  render() {
    return (
      <div>{this.props.donations.map(this._renderDonation)}</div>
    );
  }

  _renderDonation(donation, index) {
    return (
      <div className={styles.listItem} key={index}>
        <div className={styles.year}>{donation.year}</div>
        <div className={styles.content}>
          <div className={styles.heading}>
            <span className={styles.action}>Donated</span>
            &nbsp;to&nbsp;
            <a href={donation.organization.url}>{donation.organization.text}</a>
          </div>
          <div>{donation.reason}</div>
        </div>
      </div>
    );
  }
}

DonationList.propTypes = {
  donations: React.PropTypes.array.isRequired,
};
