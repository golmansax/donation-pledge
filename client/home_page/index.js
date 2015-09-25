import React from 'react';
import Layout from '../layout';
import { Container, H1, H2 } from '../components';
import Pledge from '../pledge';
import styles from './home_page.styl';

export default class HomePage extends React.Component {
  render() {
    return (
      <Layout title='My Impact Pledge' name='home_page'>
        <div className={styles.mainContainer}>
          <Container>
            <H2 className={styles.mainHeading}>
              What
              <div className={styles.headingEmphasis}>impact</div>
              will you make?
            </H2>
          </Container>
        </div>

        <div className={styles.missionSection}>
          <Container>
            Build a habit of supporting causes that mean the most to you
          </Container>
        </div>

        <Container className={styles.section}>
          <H1 className={styles.sectionHeading}>Sample Pledge</H1>
          <Pledge />
        </Container>

        <div className={styles.contactSection}>
          <Container>
            <H1>Contact</H1>
          </Container>
        </div>
      </Layout>
    );
  }
}
