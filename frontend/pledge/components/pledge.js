import React from 'react';
import SignedText from './signed_text';
import { H2 } from '../../shared/components';
import { DonationList } from '../../donation/components';
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
        <div className={styles.pledge}>
          I pledge to
          <SignedText text='donate to youth programs' category='impact' />
          every
          <SignedText text='year on my birthday' category='how often?' />
        </div>
        <div className={styles.container}>
          <div className={styles.userImageContainer}>
            <div className={styles.userImage} />
            <SignedText text='Holman Gao' category='you' />
          </div>
          <div className={styles.otherContainer}>
            <div className={styles.section}>
              <H2 className={styles.heading}>Mission</H2>
              I want to support organizations that empower youth.
              I was lucky enough to benefit from them and I am very grateful.
            </div>

            <H2 className={styles.heading}>My Actions</H2>
            <DonationList donations={DONATIONS} />
          </div>
        </div>
      </div>
    );
  }
}
