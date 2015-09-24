import React from 'react';
import Layout from '../layout';
import DonationList from '../donation/list';
import './index.styl';

const DONATIONS = [
  {
    year: 2016,
    organization: {
      text: 'TBD',
    },
  },
  {
    year: 2015,
    organization: {
      url: 'http://www.mbhsmagnet.org/',
      text: 'Montgomery County ARML Team',
    },
  },
  {
    year: 2014,
    organization: {
      url: 'https://www.hopechineseschool.org/hcscp/',
      text: 'Hope Chinese School College Park Campus',
    },
  },
  {
    year: 2013,
    organization: {
      url: 'http://www.asia.si.edu/events/imaginasia.asp',
      text: 'Smithsonian ImaginAsia Family Program',
    },
  },
];

export default class HomePage extends React.Component {
  render() {
    return (
      <Layout title='Donation Pledge' name='home_page'>
        <h1>Commit yourself to donating to organizations every year</h1>
        <button>Make a pledge!</button>

        <h2>My pledge</h2>
        <p>
          After obtaining my undergraduate degree, I made a pledge to donate
          money every year on my birthday, to support organizations that I feel
          are making a positive impact. All of the organizations
          that I have chosen so far are ones that have impacted me directly.
          This is my way of saying thanks!
        </p>

        <h2>My donations</h2>
        <DonationList donations={DONATIONS} />
        <h2>Contact</h2>
      </Layout>
    );
  }
}
