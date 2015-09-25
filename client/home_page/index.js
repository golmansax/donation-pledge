import React from 'react';
import Layout from '../layout';
import DonationList from '../donation/list';
import styles from './index.styl';
import { Button, Container, H1 } from '../components';

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
        <div className={styles.mainContainer}>
          <Container>
            <H1 className={styles.mainHeading}>
              Commit to making a recurring impact
            </H1>
            Get into the habit of doing good by making a pledge to donate
            with regards to your own schedule
            <div>
              <Button>Make a pledge!</Button>
            </div>
          </Container>
        </div>

        <Container>
          <h2>My Pledge</h2>
          <p>
            I pledge to donate to every
            <strong> year on my birthday</strong>.
          </p>

          <h2>My Donations</h2>
          <DonationList donations={DONATIONS} />
        </Container>

        <Container>
          <h2>Contact</h2>
        </Container>
      </Layout>
    );
  }
}
