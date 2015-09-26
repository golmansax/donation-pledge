import React from 'react';
import SignedText from './signed_text';
import { H3 } from '../components';
import DonationList from '../donation/list';
import styles from './pledge.styl';

const DONATIONS = [
  {
    year: 2015,
    organization: {
      url: 'http://www.mbhsmagnet.org/',
      text: 'Montgomery County ARML Team',
    },
    reason: 'for having an awesome field trip every year',
  },
  {
    year: 2014,
    organization: {
      url: 'https://www.hopechineseschool.org/hcscp/',
      text: 'Hope Chinese School College Park Campus',
    },
    reason: 'for helping me learn Chinese',
  },
  {
    year: 2013,
    organization: {
      url: 'http://www.asia.si.edu/events/imaginasia.asp',
      text: 'Smithsonian ImaginAsia Family Program',
    },
    reason: 'for being an awesome free program for kids',
  },
];

export default class Pledge extends React.Component {
  render() {
    return (
      <div className={styles.rootElement}>
        <div className={styles.pledgeText}>
          <SignedText text='Holman Gao' category='you' />
          pledges to
          <SignedText text='donate to organizations' category='impact' />
          every
          <SignedText text='year on my birthday' category='how often?' />.
        </div>

        <H3>My Impact</H3>
        <DonationList donations={DONATIONS} />
      </div>
    );
  }
}
