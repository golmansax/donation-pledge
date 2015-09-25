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
        {donation.year} -
        <span className={styles.action}>Donated</span>
        &nbsp;to
        <a href={donation.organization.url}>{donation.organization.text}</a>
        <div>{donation.reason}</div>
      </div>
    );
  }
}

DonationList.propTypes = {
  donations: React.PropTypes.array.isRequired,
};
