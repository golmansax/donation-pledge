import React from 'react';
import Layout from '../layout';
import DonationList from '../donation/list';
import { Button, Container, H1, H2, H4 } from '../components';
import SignedText from './signed_text';
import styles from './index.styl';

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
      <Layout title='My Impact Pledge' name='home_page'>
        <div className={styles.mainContainer}>
          <Container>
            <div className={styles.mainHeading}>
              <H2>
                Pledge to make a
              </H2>
              <H1 className={styles.hugeHeading}>lasting impact</H1>
            </div>
            <H4>
              Build a habit of supporting causes that mean the most to you
            </H4>
            <div style={{display: 'none'}}>
              <Button>Count me in!</Button>
            </div>
          </Container>
        </div>

        <Container className={styles.section}>
          <H2>My Pledge</H2>
          <p>
            I pledge to
            <SignedText text='donate to organizations' category='impact' />
            every
            <SignedText text='year on my birthday' category='time' />.
          </p>

          <H2>My Donations</H2>
          <DonationList donations={DONATIONS} />
        </Container>

        <Container>
          <H2>Contact</H2>
        </Container>
      </Layout>
    );
  }
}
