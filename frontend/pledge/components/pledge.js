import { Component } from 'react';
import SignedText from './signed_text';
import { H2, P } from '../../base/components';
import { DonationList } from '../../donation/components';
import styles from './pledge.styl';

const DONATIONS = [
  {
    year: 2015,
    organization: {
      url: 'http://www.mbhsmagnet.org/',
      text: 'Montgomery County ARML Team',
    },
    reason: 'This was an overnight math team field trip that I went to ' +
      'throughout middle and high school, and I loved going every year!',
  },
  {
    year: 2014,
    organization: {
      url: 'https://www.hopechineseschool.org/hcscp/',
      text: 'Hope Chinese School College Park Campus',
    },
    reason: 'I am very grateful to this school and my parents for ' +
      'helping/pushing me to learn Mandarin Chinese',
  },
  {
    year: 2013,
    organization: {
      url: 'http://www.asia.si.edu/events/imaginasia.asp',
      text: 'Smithsonian ImaginAsia Family Program',
    },
    reason: 'I volunteered for this program for six years, and I saw ' +
      'firsthand how empowering art projects can be',
  },
];

export default class Pledge extends Component {
  render() {
    return (
      <div className={styles.rootElement}>
        <div className={styles.pledge}>
          I pledge to
          <SignedText category='impact'>
            donate to youth education programs
          </SignedText>
          every
          <SignedText category='how often?'>
            year on my birthday
          </SignedText>
        </div>
        <div className={styles.container}>
          <div className={styles.userImageContainer}>
            <div className={styles.userImage} />
            <SignedText category='you'>Holman Gao</SignedText>
          </div>
          <div className={styles.otherContainer}>
            <div className={styles.section}>
              <H2 className={styles.heading}>Mission</H2>
              <P type='secondary'>
                I was fortunate enough to benefit from great programs when I was
                young and I want to support organizations that empower youth.
              </P>
            </div>

            <H2 className={styles.heading}>My Actions</H2>
            <DonationList donations={DONATIONS} />
          </div>
        </div>
      </div>
    );
  }
}
